import Sequelize, { Model } from 'sequelize';

class Genrer extends Model {
    // Modelo de usuário do postgres
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING
            },
            {
                sequelize
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsToMany(models.Movie, {
            foreignKey: 'genrer_id',
            through: 'movie_genrers',
            as: 'movies'
        });
    }
}

export default Genrer;
