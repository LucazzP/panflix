'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('production_companies', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true
            },
            logo_path: {
                type: Sequelize.STRING,
                allowNull: true
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('production_companies');
    }
};
