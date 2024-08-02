const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Album = sequelize.define('album', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    releaseyear: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
   
});

module.exports = Album;