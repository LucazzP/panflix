// acesso postgres

module.exports = {
    dialect: 'postgres',
    host: 'api.emillia.com.br',
    username: 'postgres',
    password: 'PanfliX111',
    database: 'panflix',
    port: 5433,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};
