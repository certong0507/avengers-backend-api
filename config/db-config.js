require('dotenv').config();

module.exports = {
    development: {
        database: process.env.SEQUELIZE_DB_NAME,
        username: process.env.SEQUELIZE_DB_USERNAME,
        password: process.env.SEQUELIZE_DB_PASSWORD,
        host: process.env.SEQUELIZE_DB_HOST,
        dialect: process.env.SEQUELIZE_DB_DIALECT,
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: process.env.SEQUELIZE_DB_USERNAME,
        password: process.env.SEQUELIZE_DB_PASSWORD,
        database: process.env.SEQUELIZE_DB_NAME,
        host: process.env.SEQUELIZE_DB_HOST,
        dialect: process.env.SEQUELIZE_DB_DIALECT,
    },
};
