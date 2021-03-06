import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    // Modelo de usuário do postgres
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                // Senha virtual (não vai pro banco, apenas hash)
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                confirmed: Sequelize.BOOLEAN,
                permissions: Sequelize.INTEGER
            },
            {
                sequelize
            }
        );

        // Cria a hash da senha depois de criar o usuário
        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }

    static associate(models){
        this.belongsToMany(models.Movie, { foreignKey: 'user_id', through: 'movie_favorite_user', as: 'favoriteMovies'});
    }

    // Verificação de senha do hash
    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default User;
