const db = require("../models");

module.exports = function (app) {


    app.post("/api/workouts", function (req, res) {
        db.Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                res.json(err)
            })
    });


    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    }
    )
    app.put("/api/workouts/:id",function ({body, params},res){    
        db.Workout.findByIdAndUpdate(params.id, {$set: {exercises: body}})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
}

