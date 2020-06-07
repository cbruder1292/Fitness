const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },

  exercises: [{
    type: {
      type: String,
      required: "Please enter the type of exercise"
    },
    name: {
      type: String,
      trim: true,
      required: "Please enter a name for exercise"
    },
    duration: {
      type: Number,
      required: "Please enter the duration of exercise"
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },


    distance: {
      type: Number,
    }
  }]
});

const workout = mongoose.model("Workout", WorkoutSchema);

module.exports = workout;