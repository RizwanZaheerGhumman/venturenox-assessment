const { DataTypes } = require('sequelize');
const sequelize = require('./../../db/config/sequelize');
const Tenant_Profile = sequelize.define('Tenant_Profile', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    zip_code: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    web_url: {
        type: DataTypes.STRING,
    },
});

module.exports = Tenant_Profile;
