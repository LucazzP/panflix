import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        if (process.env.DATABASE_URL) {
            this.connection = new Sequelize(process.env.DATABASE_URL, {
                dialect: 'postgres',
                protocol: 'postgres',
                port: 5432,
                logging: true,
                dialectOptions: {
                    ssl: true
                }
            });
        } else {
            this.connection = new Sequelize(databaseConfig);
        }

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
