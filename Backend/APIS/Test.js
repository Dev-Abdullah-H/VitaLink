const express = require("express");
const router = express.Router();
const Test = require("../Models/Test");

router.post("/create-test/heart", async (req, res) => {
  const { testVal, date } = req.body;
  try {
    const createTest = new Test({ testVal, date });
    const saveTest = await createTest.save();
    res.json({ success: true, test: saveTest });
  } catch (e) {
    res.json({ success: false, error: e });
  }
});

router.get("/get-test/heart", async (req, res) => {
  try {
    const heartRates = await Test.find();
    const values = heartRates.map((data) => data.testVal);
    const dates = heartRates.map((data) => data.date);
    res.json({ values, dates });
  } catch (error) {
    console.error("Error fetching heart rate data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;