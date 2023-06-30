const { User } = require("../models");

const userData = [
    {
        "name": "Joe",
        "email": "joe@test.com",
        "password": "testing123"
    },
    {
        "name": "Tina",
        "email": "tina@test.com",
        "password": "testing123"
    },
    {
        "name": "Bob",
        "email": "bob@test.com",
        "password": "testing123"
    },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;