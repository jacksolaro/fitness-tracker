const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for this exercise"
  },
  type: {
    type: String,
    required: "Enter an Exercise Type"
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  }
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
