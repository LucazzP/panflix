import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

// verificacao se o usuario esta logado
export default async (req, res, next) => {
    // recebe token
    const authHeader = req.headers.authorization;

    // caso nao haja token da erro
    if (!authHeader) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    // desestrutura o token recebido via requisicao
    const [, token] = authHeader.split(' ');

    // faz a verificacao do token e retorna next para continuar ou retorna erro caso esteja errado
    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.userId = decoded.id;
        req.permissions = decoded.permissions;

        if(req.method != 'GET' && decoded.permissions != 10) {
            return res.status(401).json({ error: 'User not authorized' });
        };

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }
};
