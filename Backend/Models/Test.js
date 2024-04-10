const mongoose = require("mongoose");

const TestScehma = new mongoose.Schema({
  testName: String,
  testVal: String,
  date: String,
});

module.exports = mongoose.model("test", TestScehma);