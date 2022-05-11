const User = require("./User");
const Event = require("./Event");
const GroupMember = require("./GroupMember");

User.hasMany(Event, {
  foreignKey: "user_id",
});

Event.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(GroupMember, {
  foreignKey: "user_id",
});

GroupMember.belongsTo(User, {
  foreignKey: "user_id",
});

Event.hasMany(GroupMember, {
  foreignKey: "event_id",
});

GroupMember.belongsTo(Event, {
  foreignKey: "event_id",
});

module.exports = { User, Event, GroupMember };
