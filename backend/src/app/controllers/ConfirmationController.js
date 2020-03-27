import jwt from 'jsonwebtoken';
// config jwt
import authConfig from '../../config/auth';
import User from '../models/User';

class ConfirmationController {
    // Confirm email
    async update(req, res) {
        try {
            const { user: id } = jwt.verify(
                req.params.token,
                authConfig.secret
            );
            await User.update({ confirmed: true }, { where: { id } });
        } catch (e) {
            res.send(`Error: ${e}`);
        }
        return res.json({ message: 'OK' });
    }
}

export default new ConfirmationController();
