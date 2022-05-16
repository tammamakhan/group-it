const User = require("./User");
const Event = require("./Event");
const GroupMember = require("./GroupMember");

User.hasMany(Event, {
  foreignKey: "id",
});

Event.belongsTo(User, {
  foreignKey: "id",
});

User.hasMany(GroupMember, {
  foreignKey: "id",
});

GroupMember.belongsTo(User, {
  foreignKey: "id",
});

Event.hasMany(GroupMember, {
  foreignKey: "id",
});

GroupMember.belongsTo(Event, {
  foreignKey: "id",
});

module.exports = { User, Event, GroupMember };
