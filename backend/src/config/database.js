module.exports = {
    production: {
        use_env_variable: "DATABASE_URL",
        dialect: 'postgres',
        database: 'panflix',
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true
        }
    },
    development: {
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
    },
};
