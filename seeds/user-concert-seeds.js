const { UserConcert } = require("../models");

const userConcertData = [
    {
        user_id: 1, 
        concert_id: 1,
    },
    {
        user_id: 1, 
        concert_id: 2,
    },
    {
        user_id: 2, 
        concert_id: 1,
    },
    {
        user_id: 2, 
        concert_id: 3,
    },
    {
        user_id: 3, 
        concert_id: 3,
    },
];

const seedUserConcerts = () => UserConcert.bulkCreate(userConcertData);

module.exports = seedUserConcerts;