const express = require("express");
const router = express.Router();
const Test = require("../Models/Test");

router.post("/create-test/:id", async (req, res) => {
  const { testName, testVal, date } = req.body;
  try {
    const createTest = new Test({ testName, testVal, date });
    const saveTest = await createTest.save();
    res.json({ success: true, test: saveTest });
  } catch (e) {
    res.json({ success: false, error: e });
  }
});

router.get("/get-test/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const heartRates = await Test.find({ testName: id });
    const values = heartRates.map((data) => data.testVal);
    const dates = heartRates.map((data) => data.date);
    res.json({ values, dates });
  } catch (error) {
    console.error("Error fetching heart rate data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
