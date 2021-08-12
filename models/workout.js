const mongoose = require('mongoose');

const Schema = mongoose.Schema; //creating schema

const workoutSchema = new Schema({
    date: {
        type: Date,
        default:() => new Date(),
      },
    exercises: [
        {
            type:{
                type: String,
                required: "Please enter the type of exercise"
            },
            name:{
                type: String,
                required: "Please enter the name of exercise"
            },
            duration:{
                type: Number,
                required: "Please enter the number of minutes"
            },
            weight:{
                type: Number,
                
            },
            reps:{
                type: Number,
                
            },
            sets:{
                type: Number,
                
            },
            distance:{
                type: Number,
                
            },
           
        },
    ],
    })

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;