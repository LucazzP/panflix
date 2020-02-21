import User from '../models/User';

class UserController {
    async store(req, res) {
        try {
            const userExists = await User.findOne({
                where: { email: req.body.email }
            });

            if (userExists) {
                return res.status(400).json({ error: 'User already existis' });
            }

            const { id, name, email, permission_level } = await User.create(
                req.body
            );

            return res.json({
                id,
                name,
                email,
                permission_level
            });
        } catch (error) {
            return res.status(401).json(error);
        }
    }

    async update(req, res) {
        try {
            console.log(req.userId);

            return res.json({ ok: true });
        } catch (error) {
            return res.status(401).json(error);
        }
    }
}

export default new UserController();
