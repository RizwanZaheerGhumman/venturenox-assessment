const { Sequelize } = require('sequelize');
require('dotenv').config();

const { POSTGRES_USERNAME, POSTGRES_PASSWORD, SOCIAL_DB } = process.env;

const sequelize = new Sequelize(SOCIAL_DB, POSTGRES_USERNAME, POSTGRES_PASSWORD, {
    host: 'postgres',
    dialect: 'postgres',
});

module.exports = sequelize;
