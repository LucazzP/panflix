import Sequelize, { Model } from 'sequelize';

class Genrer extends Model {
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
}

export default Genrer;
