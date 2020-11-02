const router = require("express").Router();
const Activity = require("../models/activity.js");

router.get("/api/all", (req, res) => {
  Activity.find({})
    .then(dbActivity => {
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/submit", ({ body }, res) => {
  Activity.create(body)
    .then(dbActivity => {
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
