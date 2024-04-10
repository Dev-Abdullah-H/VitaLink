const mongoose = require("mongoose");

const TestScehma = new mongoose.Schema({
  email: String,
  testName: String,
  testVal: String,
  date: String,
});

module.exports = mongoose.model("test", TestScehma);