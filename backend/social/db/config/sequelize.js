const { Sequelize } = require('sequelize');
require('dotenv').config();

const { POSTGRES_USERNAME, POSTGRES_PASSWORD,POSTGRES_DATABASE } = process.env;
const sequelize = new Sequelize(POSTGRES_DATABASE, POSTGRES_USERNAME, POSTGRES_PASSWORD, {
    host: 'postgres',
    dialect: 'postgres',
});

module.exports = sequelize;
