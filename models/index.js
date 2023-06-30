const User = require("./User");
const Concert = require("./Concert");
const UserConcert = require("./UserConcert");

// Users belong to many concerts
User.belongsToMany(Concert, {
    through: UserConcert,
    foreignKey: 'user_id',
});

// Concerts belong to many Users 
Concert.belongsToMany(User, {
    through: UserConcert,
    foreignKey: 'concert_id'
});

//export evrything from index.js

module.exports = { User, Concert, UserConcert }