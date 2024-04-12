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

router.post("/get-test-all", async (req, res) => {
  const { email } = req.body;
  try {
    const heartRates = await Test.find({ email: email, testName: "heart" });
    const bloodTests = await Test.find({ email: email, testName: "blood" });
    const urineTests = await Test.find({ email: email, testName: "urine" });
    const bmiTests = await Test.find({ email: email, testName: "bmi" });
    res.json({ heartRates, bloodTests, urineTests, bmiTests });
  } catch (e) {
    res.json({ success: false, error: e });
  }
});

router.put("/update-test/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateTest = await Test.updateOne({ _id: id }, req.body);
    res.json({
      success: true,
      message: "Test updated successfully",
      updatedTest: updateTest,
    });
  }catch(e) {
    res.json({ success: false, error: e });
  }
})

router.delete("/delete-test/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTest = await Test.deleteOne({ _id: id });
    res.json({
      success: true,
      message: "Test deleted successfully",
      deletedTest: deleteTest,
    });
  } catch (e) {
    res.json({ success: false, error: e });
  }
});

module.exports = router;