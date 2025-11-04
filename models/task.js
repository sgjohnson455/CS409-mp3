// Load required packages
var mongoose = require('mongoose');

// Define our task schema - updated with reqs?
var TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Task name needed']
    },
    description: {
        type: String,
        default: ''
    },
    deadline: {
        type: Date,
        required: [true, 'Task deadline needed']
    },
    completed: {
        type: Boolean,
        default: false
    },
    assignedUser: {
        type: String,
        default: ''
    },
    assignedUserName: {
        type: String,
        default: "unassigned"
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', TaskSchema);