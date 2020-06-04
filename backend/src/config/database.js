// acesso postgres

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'panflix',
    port: 5432,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};
