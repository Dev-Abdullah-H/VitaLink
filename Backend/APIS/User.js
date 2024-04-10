const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const createAcc = new User({ email, password });
    const saveAcc = await createAcc.save();
    res.json({ success: true, user: saveAcc });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: "Internal Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await User.findOne({ email, password });
    if (login) {
      res.json({ success: true, login: login });
    } else {
      res.json({ login: false, message: "No User found!" });
    }
  } catch (e) {
    res.status(500).json({ success: false });
    console.log(e);
  }
});

module.exports = router;
