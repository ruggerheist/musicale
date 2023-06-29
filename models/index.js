const User = require("./User");
const Concert = require("./Concert");
Concert
User.hasMany(Concert, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Concert.belongsTo(User, {
    foreignKey: 'user_id',
});

//export evrything from index.js

module.exports = { User, Concert }