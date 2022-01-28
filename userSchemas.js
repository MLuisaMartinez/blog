const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    birthday: {type: Date, required: true},
    age: {type: Number, required: true},
    password: {type: String, required: true}
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel