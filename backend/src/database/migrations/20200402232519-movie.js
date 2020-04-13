'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('movies', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            id_tmdb: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            backdrop_path: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            imdb_id: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            original_language: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            original_title: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            overview: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            popularity: {
                type: Sequelize.DECIMAL,
                allowNull: true,
            },
            poster_path: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            release_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            tagline: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('movies');
    }
};
