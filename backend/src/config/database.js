/* eslint-disable prettier/prettier */
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'panflix',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};
