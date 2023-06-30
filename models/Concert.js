const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Concert extends Model {}

Concert.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        venue: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ticket_url: {
            type: DataTypes.STRING(2048),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'concert',
    }
);

module.exports = Concert;

// do we want to include time or is date enough?