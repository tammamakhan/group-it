const { GroupMember } = require('../models');

const groupmemberData = [
    {
       member_id: '1',
       group_id:'1'
    },
    {
       member_id: '2',
       group_id: '1'
    },

];

const seedGroupMembers = () => GroupMember.bulkCreate(groupmemberData);

module.exports = seedGroupMembers;