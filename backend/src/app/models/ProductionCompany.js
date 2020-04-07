import Sequelize, { Model } from 'sequelize';

class ProductionCompany extends Model {
    // Modelo de usuário do postgres
    static init(sequelize) {
        super.init(
            {
                logo_path: Sequelize.STRING,
                name: Sequelize.STRING
            },
            {
                sequelize
            }
        );
        return this;
    }
}

export default ProductionCompany;
