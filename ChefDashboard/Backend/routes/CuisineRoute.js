const express = require("express");
const { setCuisine } = require("../controllers/CuisineController");


const router = express.Router();

router.post("/setCuisine", setCuisine);

module.exports = router;
