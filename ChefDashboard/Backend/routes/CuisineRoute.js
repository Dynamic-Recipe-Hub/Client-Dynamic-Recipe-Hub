const express = require("express");
const { setCuisine, getCuisine } = require("../controllers/CuisineController");


const router = express.Router();
router.get("/getCuisine", getCuisine);
router.post("/setCuisine", setCuisine);

module.exports = router;