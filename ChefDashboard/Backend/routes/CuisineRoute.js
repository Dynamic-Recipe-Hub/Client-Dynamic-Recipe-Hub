const express = require("express");
const { setCuisine, getAllCuisines } = require("../controllers/CuisineController");


const router = express.Router();

router.post("/setCuisine", setCuisine);
router.get('/getAllCuisines', getAllCuisines);

module.exports = router;
