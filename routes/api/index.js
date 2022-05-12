const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const eventRoutes = require("./event-routes");
const groupMemberRoutes = require("./groupmember-routes");

router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use("/groupmembers", groupMemberRoutes);

module.exports = router;
