const router = require("express").Router();
const { db } = require("../models/Activity.js");
const Activity = require("../models/Activity.js");
const Workout = require("../models/Workout.js");

router.get("/", (req, res) => {
  Workout.find({})
    .populate("activities")
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

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
    .populate("activities")
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/activity", ({ body }, res) => {
  Activity.create(body)
    // TODO: Push activity into the corresponding Workout
    .then(({ _id }) => Workout.findOneAndUpdate({}, { $push: { activities: _id } }, { new: true }))
    .then(dbActivity => {
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

router.delete("/api/activity/", ({ body }, res) => {
  console.log({ body })
  Activity.deleteOne({ _id: body._id })
  .then(
    res.send(200)
  ).catch(err => {
    res.status(400).json(err)
  })
});

module.exports = router;
