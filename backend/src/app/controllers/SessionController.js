import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import User from '../models/User';

class SessionController {
    async store(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            if (!(await user.checkPassword(password))) {
                return res
                    .status(401)
                    .json({ error: 'Password does not match' });
            }

            const { id, name } = user;
            const { permission_level } = await User.findOne({
                where: { email: req.body.email }
            });

            return res.json({
                user: {
                    id,
                    name,
                    email,
                    permission_level
                },
                token: jwt.sign({ id }, authConfig.secret, {
                    expiresIn: authConfig.expiresIn
                })
            });
        } catch (error) {
            return res.status(401).json(error);
        }
    }
}

export default new SessionController();
