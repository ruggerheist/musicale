const seedUsers = require("./user-seeds");
const seedConcerts = require("./concert-seeds");
const seedUserConcerts = require("./user-concert-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedConcerts();
  console.log('\n----- CONCERTS SEEDED -----\n');

  await seedUserConcerts();
  console.log('\n----- USER CONCERTS SEEDED -----\n');

  process.exit(0);
};

seedAll();