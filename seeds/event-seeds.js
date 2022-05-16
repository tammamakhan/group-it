const { Event } = require('../models');

const eventData = [
    {
        host_id: '1' ,
        name: 'Public Picnic at the Park',
        description: 'A public event for the community. Anyone can come, just bring food.',
        start: '9/10/22',
        end: '9/10/22',
        street_address: '8501 Fontaine St',
        city: 'Oakland',
        state: 'CA',
        zip_code: '94605'
    },
    {
        host_id: '2' ,
        name: 'Happy Birthday Marty',
        description: 'Birthday party for Marty, available for everyone from the community.',
        start: '4/21/22',
        end: '4/21/22',
        street_address: ' 9600 Sunnyside St',
        city: 'Oakland',
        state: 'CA',
        zip_code: '94603'
    },

];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;