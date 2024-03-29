const mongoose = require('mongoose')

const UserInfoScehma = new mongoose.Schema({
    name: String,
    dob: String,
    nationality: String,
    physicalActivity: String
})

module.exports = mongoose.model("userinfo", UserInfoScehma)