const sequelize = require('../config/connection');
const { User, Concert } = require('../models');

const userData = require('./userData.json');
const concertData = require('./concertData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const concert of concertData) {
    await Concert.create({
      ...concert,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

};

module.exports = seedDatabase;