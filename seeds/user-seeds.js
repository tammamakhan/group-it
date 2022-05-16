const { User } = require('../models');

const userData = [
    {
        email: 'test@gmail.com',
        password: 'Lmonk'
    },
    {
        email: 'user@gmail.com',
        password: 'Lmonk'
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;