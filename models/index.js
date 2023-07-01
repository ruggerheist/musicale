const User = require("./User");
const Concert = require("./Concert");
const UserConcert = require("./UserConcert");

// Users belong to many concerts (through UserConcert)
User.associate = (models) => {
    User.belongsToMany(models.Concert, {
        through: {
            model: models.UserConcert,
            as: 'concerts',
            foreignKey: 'user_id',
        },
    });
};

User.belongsToMany(Concert, {
    through: {
        model: UserConcert,
        unique: false,
    },
    as: 'users_going_to_concert'
});

// Concerts belong to many Users (through UserConcert)
Concert.associate = (models) => {
    Concert.belongsToMany(models.User, {
        through: models.UserConcert,
        as: 'users',
        foreignKey: 'concert_id',
    });
};

Concert.belongsToMany(User, {
    through: {
        model: UserConcert,
        unique: false,
    },
    as: 'concerts_user_going_to'
});

// // Users belong to many concerts
// User.belongsToMany(Concert, {
//     through: UserConcert,
//     foreignKey: 'user_id',
// });

// // Concerts belong to many Users 
// Concert.belongsToMany(User, {
//     through: UserConcert,
//     foreignKey: 'concert_id'
// });

//export evrything from index.js
module.exports = { User, Concert, UserConcert }