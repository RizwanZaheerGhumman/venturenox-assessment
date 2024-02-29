const { DataTypes } = require('sequelize');
const sequelize = require('./../../db/config/sequelize');
const Tenant_Profile = require('./../TenantProfile/TenantProfile');

const User_Profile = sequelize.define('User_Profile', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department: {
        type: DataTypes.STRING,
    },
    designation: {
        type: DataTypes.STRING,
    },
    image_url: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
    },
    bio: {
        type: DataTypes.STRING,
    },
    social_links: {
        type: DataTypes.JSON,
    },
    employee_id: {
        type: DataTypes.INTEGER,
    },
});
User_Profile.belongsTo(Tenant_Profile, { foreignKey: 'tenant_id' });

module.exports = User_Profile;
