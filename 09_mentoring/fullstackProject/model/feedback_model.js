const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let feedbackSchema = new Schema({
    email: { type: String, required: true },
    feedback: { type: String, required: true }
});

module.exports = mongoose.model('Feedback', feedbackSchema)