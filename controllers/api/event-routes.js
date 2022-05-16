const router = require("express").Router();
const { Event, User } = require("../../models");

// GET /api/events
router.get("/", (req, res) => {
  Event.findAll({
    attributes: [
      "id",
      "host_id",
      "name",
      "description",
      "start",
      "end",
      "street_address",
      "city",
      "state",
      "zip_code",
      "created_at",
    ],
    include: [
      {
        model: User,
        attributes: ["email"],
      },
    ],
  })
    .then((dbEventData) => res.json(dbEventData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/events/:id
router.get("/:id", (req, res) => {
  Event.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "host_id",
      "name",
      "description",
      "start",
      "end",
      "street_address",
      "city",
      "state",
      "zip_code",
      "created_at",
    ],
    include: [
      {
        model: User,
        attributes: ["email"],
      },
    ],
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id" });
        return;
      }
      res.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/events/:name
router.get("/:name", (req, res) => {
  Event.findAll({
    where: {
      name: req.params.name,
    },
    attributes: [
      "id",
      "host_id",
      "name",
      "description",
      "start",
      "end",
      "street_address",
      "city",
      "state",
      "zip_code",
      "created_at",
    ],
    include: [
      {
        model: User,
        attributes: ["email"],
      },
    ],
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No events found with this name" });
        return;
      }
      res.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/events/:host_id
router.get("/:host_id", (req, res) => {
  Event.findAll({
    where: {
      host_id: req.params.host_id,
    },
    attributes: [
      "id",
      "host_id",
      "name",
      "description",
      "start",
      "end",
      "street_address",
      "city",
      "state",
      "zip_code",
      "created_at",
    ],
    include: [
      {
        model: User,
        attributes: ["email"],
      },
    ],
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No events found with this host" });
        return;
      }
      res.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/events
router.post("/", (req, res) => {
  Event.create({
    host_id: req.body.host_id,
    name: req.body.name,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code,
  })
    .then((dbEventData) => res.json(dbEventData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/events/:id
router.put("/:id", (req, res) => {
  Event.update(
    {
      name: req.body.name,
      description: req.body.description,
      start: req.body.start,
      end: req.body.end,
      street_address: req.body.street_address,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id" });
        return;
      }
      res.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/events/:id
router.delete("/:id", (req, res) => {
  Event.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id" });
        return;
      }
      res.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
