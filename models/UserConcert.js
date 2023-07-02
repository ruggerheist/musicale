const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserConcert extends Model { }

UserConcert.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        concert_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'concert',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_concert',
    }
);

module.exports = UserConcert;