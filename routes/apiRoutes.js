// ***get all workouts
const router = require("express").Router();
const Workout = require("../models/workout.js");

// router.get("/api/workouts", (req, res) => {
//     dbWorkout.aggregate([
//         {
//             $addFields: {
//                 totalDuration: {
//                     $sum:"$exercises.duration"
//                 }
//             }
//         }
//     ])
// })
// .then(dbWorkouts => {
//     res.json(dbWorkouts)
// }) 
// .catch(err => {
//     res.json(err)
// })

// router.get("/api/workouts/range", (req, res) => {
//     Workout.aggregate([
//         {
//             $addFields: {
//                 totalDuration: {
//                     $sum:"$exercises.duration"
//                 },
//             },
//         },
//     ])
//     .sort({_id:-1})
//     .limit(7) //play with this number
    // .then(dbWorkouts => {
    //     res.json(dbWorkouts) //console.log(dbWorkouts)
    // }) 
//     .catch(err => {
//         res.json(err)
//     })
// })

router.get("/api/workouts", ({body}, res) => {
    console.log(Workout)
    Workout.find({})
      .then(Workouts => {
        res.json(Workouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  })

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(Workout => {
        res.json(Workout) //console.log(Workouts)
    }) 
    .catch(err => {
        res.json(err)
    })
})

router.put("/api/workouts/:id"), ({body, params}, res) => {
    console.log("body", body);
    console.log("Params.id", params.id);
    Workout.findByIdAndUpdate(params.id, { $push:{exercises: body}},
        {new: true})
        .then(Workout => {
            res.json(Workout) //console.log(Workouts)
        }) 
        .catch(err => {
            res.json(err)
        })

}

module.exports = router;