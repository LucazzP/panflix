import Sequelize, { Model } from 'sequelize';

class Movie extends Model {
    // Modelo de usuário do postgres
    static init(sequelize) {
        super.init(
            {
                idTM: Sequelize.INTEGER,
                backdrop_path: Sequelize.STRING,
                imdb_id: Sequelize.STRING,
                original_language: Sequelize.STRING,
                original_title: Sequelize.STRING,
                overview: Sequelize.STRING,
                popularity: Sequelize.INTEGER,
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
}

export default Movie;
