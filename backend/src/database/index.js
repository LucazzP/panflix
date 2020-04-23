import Sequelize from 'sequelize';

import User from '../app/models/User';
import Movie from '../app/models/Movie';
import ProductionCompany from '../app/models/ProductionCompany';
import Genrer from '../app/models/Genrer';
import SpokenLanguage from '../app/models/SpokenLanguage';

import databaseConfig from '../config/database';

const models = [User, Movie, ProductionCompany, Genrer, SpokenLanguage];
const modelsAssociations = [Movie, ProductionCompany, Genrer, SpokenLanguage];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
        modelsAssociations.map(model =>
            model.associate(this.connection.models)
        );
    }
}

export default new Database();
