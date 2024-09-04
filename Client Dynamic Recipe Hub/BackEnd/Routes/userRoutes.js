const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");
const paymentController = require("../Controllers/paymentController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/googleSignup", userController.googleSignup);

router.post("/Googellogin", userController.googleLogin);
router.post("/pay", paymentController.createPaymentIntent);

module.exports = router;
