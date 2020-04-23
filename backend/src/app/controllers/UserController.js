import * as Yup from 'yup';

// modelo do usuario
import User from '../models/User';
import Mail from '../../lib/Mail';

class UserController {
    // registro
    async store(req, res) {
        // schema do usuario
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string()
                .required()
                .min(6)
        });

        // caso algum campo nao esteja preenchido ou a senha tenha menos q 6 digitos da erro
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        // verifica se o usuario ja existe pelo email
        const userExists = await User.findOne({
            where: { email: req.body.email }
        });

        // caso o usuario ja exista retorna erro
        if (userExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // cria o usuario via modelo
        const { id, name, email, permissions } = await User.create(req.body);

        await Mail.sendEmailConfirmAccount(email, name, id);

        // retorna as informacoes do usuario
        return res.json({
            id,
            name,
            email,
            permissions
        });
    }

    async buySubscription(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number(),
            permissions: Yup.number()
        });

        // caso a validacao der erro retornar esse falha
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        if (![1, 2, 3].includes(req.body.permissions)) {
            return res.status(400).json({ error: 'Invalid Permission' });
        }

        const user = await User.findByPk(req.body.id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        try {
            await user.update({ permissions: req.body.permissions });
        } catch (error) {
            return res.status(400).json(error);
        }

        return res.status(200).json({ message: 'OK' });
    }

    // atualiza as informacoes do usuario
    async update(req, res) {
        // schema verificando as informacoes
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            // para a senha o usuario deve confirmar a senha antiga com o minimo de 6 digitos
            oldPassword: Yup.string().min(6),
            // e digitar a senha duas vezes para confirmar
            password: Yup.string()
                .min(6)
                .when('oldPassword', (oldPassword, field) =>
                    oldPassword ? field.required() : field
                ),
            confirmPassword: Yup.string().when('password', (password, field) =>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            )
        });

        // caso a validacao der erro retornar esse falha
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        // pega o email e a senha antiga da requisicao
        const { email, oldPassword } = req.body;

        // verifica se o usuario ja existe via key primaria
        const user = await User.findByPk(req.userId);

        // verifica se o usuario com o email existe
        if (email !== user.email) {
            const userExists = await User.findOne({ where: { email } });

            if (userExists) {
                return res.status(400).json({ error: 'User already exists.' });
            }
        }

        // caso a senha antiga passada estiver errada passa erro
        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            res.status(401).json({ error: 'Password does not match' });
        }

        // da update nas informacoes do usuario
        const { id, name, provider } = await user.update(req.body);

        // retorna as infos do usuario
        return res.json({
            id,
            name,
            email,
            provider
        });
    }
}

export default new UserController();
