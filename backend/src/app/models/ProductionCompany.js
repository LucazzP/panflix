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

    static associate(models){
        this.belongsToMany(models.Movie, { foreignKey: 'production_company_id', through: 'movie_production_companies', as: 'movies'});
    }
}

export default ProductionCompany;
