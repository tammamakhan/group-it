const router = require("express").Router();
const { GroupMember, User, Event } = require("../../models");

// GET /api/groupmembers
router.get("/", (req, res) => {
  GroupMember.findAll({
    attributes: ["id", "member_id", "group_id"],
    include: [
      {
        model: User,
        attributes: ["email"],
      },
      {
        model: Event,
        attributes: ["name"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/groupmembers/:id
router.get("/:id", (req, res) => {
  GroupMember.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["member_id", "group_id"],
    include: [
      {
        model: User,
        attributes: ["email"],
      },
      {
        model: Event,
        attributes: ["name"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No group member found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/groupmembers
router.post("/", (req, res) => {
  GroupMember.create({
    member_id: req.body.member_id,
    group_id: req.body.group_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/groupmembers/:id
router.put("/:id", (req, res) => {
  GroupMember.update(
    {
      member_id: req.body.member_id,
      group_id: req.body.group_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No group member found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/groupmembers/:id
router.delete("/:id", (req, res) => {
  GroupMember.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No group member found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
