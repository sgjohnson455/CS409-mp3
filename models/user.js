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

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);

