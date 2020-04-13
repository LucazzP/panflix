import Sequelize, { Model } from 'sequelize';

class SpokenLanguage extends Model {
    // Modelo de usuário do postgres
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
            },
            {
                sequelize
            }
        );
        return this;
    }

    static associate(models){
        this.belongsToMany(models.Movie, { foreignKey: 'spoken_language_id', through: 'movie_spoken_languages', as: 'movies'});
    }
}

export default SpokenLanguage;
