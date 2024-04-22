const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    sunday: {
        type: String, 
    },
    monday: {
        type: String, 
    },
    tuesday: {
        type: String, 
    },
    wednesday: {
        type: String, 
    },
    thursday: {
        type: String, 
    },
    friday: {
        type: String, 
    },
    saturday: {
        type: String, 
    },
});

module.exports = Goal = mongoose.model('Goal', GoalSchema);