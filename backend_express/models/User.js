const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name_user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar_user: {
        type: String,
    },
    joined: {
        type: Date,
    }
});


module.exports = model('User', UserSchema );