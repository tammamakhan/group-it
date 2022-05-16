const seedUsers = require('./user-seeds');
const seedEvents = require('./event-seeds')
const seedGroupMembers = require('./groupmember-seeds')


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USER SEEDED -----\n');
    await seedEvents();
    console.log('\n----- EVENTS SEEDED -----\n');
    await seedGroupMembers();
    console.log('\n----- GROUP MEMBERS SEEDED -----\n');


    process.exit(0);
};

seedAll();
