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
            return res.status(400).json({ error: 'User already existis' });
        }

        // cria o usuario via modelo
        const { id, name, email, provider } = await User.create(req.body);

        // enviar email confirmando
        await Mail.sendMail({
            to: `${name} <${email}>`,
            subject: 'Confirmação de cadastro - Panflix',
            text: 'E-mail confirmado'
        });

        // retorna as informacoes do usuario
        return res.json({
            id,
            name,
            email,
            provider
        });
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
