const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");
const verifyToken = require('../Middleware/auth');
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/googleSignup", userController.googleSignup);

router.post("/Googellogin", userController.googleLogin);


router.get("/getAllUsers", verifyToken,userController.getAllUsers);
router.put("/updateProfile/:userId", userController.updateProfile);

module.exports = router;
