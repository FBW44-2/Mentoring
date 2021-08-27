let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let UserSchema = new Schema({
    email: { type: String, require: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String }
});

module.exports = mongoose.model('User', UserSchema);