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
        title: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        start: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING(2048),
            allowNull: true,
        },
        event_id: {
            type: DataTypes.STRING,
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