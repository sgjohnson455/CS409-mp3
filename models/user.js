// Load required packages
var mongoose = require('mongoose');

// Define our user schema (need name/email, other fields default)
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Username needed']
    },
    email: {
        type: String,
        required: [true, 'User email needed']
    },
    pendingTasks: {
        type: [String],
        default: [] // default is empty
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

// Define our task schema
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

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Task', TaskSchema);
