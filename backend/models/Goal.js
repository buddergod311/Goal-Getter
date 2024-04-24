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
        type: Boolean, 
    },
    monday: {
        type: Boolean, 
    },
    tuesday: {
        type: Boolean, 
    },
    wednesday: {
        type: Boolean, 
    },
    thursday: {
        type: Boolean, 
    },
    friday: {
        type: Boolean, 
    },
    saturday: {
        type: Boolean, 
    },
});

module.exports = Goal = mongoose.model('Goal', GoalSchema);