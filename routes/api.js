const router = require("express").Router();
const Activity = require("../models/Activity.js");
const Workout = require("../models/Workout.js");

router.get("/api/activities", (req, res) => {
  Activity.find({})
    .then(dbActivity => {
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/activity", ({ body }, res) => {
  Activity.create(body)
    .then(dbActivity => {
      // TODO: Push activity into the corresponding Workout
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workout", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
