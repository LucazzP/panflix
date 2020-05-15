import Sequelize, { Model } from 'sequelize';

class Movie extends Model {
    // Modelo de usuário do postgres
    static init(sequelize) {
        super.init(
            {
                id_tmdb: Sequelize.INTEGER,
                backdrop_path: Sequelize.STRING,
                video_key: Sequelize.STRING,
                video_site: Sequelize.STRING,
                imdb_id: Sequelize.STRING,
                original_language: Sequelize.STRING,
                original_title: Sequelize.STRING,
                overview: Sequelize.STRING,
                popularity: Sequelize.DECIMAL,
                poster_path: Sequelize.STRING,
                release_date: Sequelize.DATE,
                tagline: Sequelize.STRING,
                title: Sequelize.STRING,
            },
            {
                sequelize
            }
        );
        return this;
    }

    static associate(models){
        this.belongsToMany(models.ProductionCompany, { foreignKey: 'movie_id', through: 'movie_production_companies', as: 'production_companies'});
        this.belongsToMany(models.SpokenLanguage, { foreignKey: 'movie_id', through: 'movie_spoken_languages', as: 'spoken_languages'});
        this.belongsToMany(models.Genrer, { foreignKey: 'movie_id', through: 'movie_genrers', as: 'genres'});
        this.belongsToMany(models.User, { foreignKey: 'movie_id', through: 'movie_favorite_user', as: 'usersFavorited'});
    }
}

export default Movie;
