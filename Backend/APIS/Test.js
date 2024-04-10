const express = require("express");
const router = express.Router();
const Test = require("../Models/Test");

router.post("/create-test/:id", async (req, res) => {
  const { email, testName, testVal, date } = req.body;
  try {
    const createTest = new Test({ email, testName, testVal, date });
    const saveTest = await createTest.save();
    res.json({ success: true, test: saveTest });
  } catch (e) {
    res.json({ success: false, error: e });
  }
});

router.post("/get-test/:id", async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  try {
    const heartRates = await Test.find({ email: email, testName: id });
    const values = heartRates.map((data) => data.testVal);
    const dates = heartRates.map((data) => data.date);
    res.json({ values, dates });
  } catch (error) {
    console.error("Error fetching heart rate data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
