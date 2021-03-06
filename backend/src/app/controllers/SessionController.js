import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

// config jwt
import authConfig from '../../config/auth';

// modelo de usuario
import User from '../models/User';

class SessionController {
    // login
    async store(req, res) {
        // cria um schema de usuario com o email e senha requisitados para criar um usuario
        const schema = Yup.object().shape({
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string().required()
        });

        // caso algum campo nao for preenchido da erro
        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        // pega o email e senha da requisicao
        const { email, password } = req.body;

        // verifica se o usuario existe
        const user = await User.findOne({ where: { email } });

        // caso n exista retorna erro
        if (!user) {
            return res.status(422).json({ error: 'User not found' });
        }

        // verifica a senha do usuario
        if (!(await user.checkPassword(password))) {
            return res.status(422).json({ error: 'Password does not match' });
        }

        // pega o id e nome do usuario
        const { id, name, permissions, confirmed } = user;

        if (!confirmed) {
            return res
                .status(422)
                .json({ error: 'Please confirm your email login' });
        }

        let today = new Date();
        today.setHours(today.getHours() + 2);

        // faz o retorno das infos do usuario
        return res.json({
            user: {
                id,
                name,
                email,
                permissions
            },
            // cria o token da sessao
            token: jwt.sign({ id, permissions }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            }),
            expiresIn: today.toUTCString(),
        });
    }
}

export default new SessionController();
