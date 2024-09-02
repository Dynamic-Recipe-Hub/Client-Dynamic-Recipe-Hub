const express = require("express");
const { createDish } = require("../controllers/DishController");


const router = express.Router();

router.post("/createDish", createDish);

module.exports = router;