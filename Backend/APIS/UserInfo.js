const express = require("express");
const router = express.Router();
const UserInfo = require("../Models/UserInfo");

router.post("/saveinfo", async (req, res) => {
  const { email, name, dob, nationality, physicalActivity } = req.body;
  try {
    const user = new UserInfo({
      email,
      name,
      dob,
      nationality,
      physicalActivity,
    });
    const saveUserInfo = await user.save();
    res.json({ success: true, saveUserInfo: saveUserInfo });
  } catch (e) {
    res.json({ success: false, error: e });
  }
});

module.exports = router;
