const express = require("express");
const userService = require("../Services/user_service");
const Router = express.Router();

Router.post("/signup", async (req, res) => {
  try {
    const msg = await userService.validateUser(req, res);
    return res.json({
      msg,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      msg: error.message,
    });
  }
});

Router.post("/signin", async (req, res) => {
  try {
    const msg = await userService.getUsers(req, res);
    return res.json({
      msg,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      msg: error.message,
    });
  }
});

Router.post("/EmailVerification", async (req, res) => {
  try {
    const data = await userService.otpSender(req, res);

    return res.json({
      msg: data,
    });
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

module.exports = Router;
