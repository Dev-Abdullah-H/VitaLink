const mongoose = require('mongoose')

const UserScehma = new mongoose.Schema({
    email: String,
    password: String,
})

module.exports = mongoose.model("user", UserScehma)