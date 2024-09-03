const express = require("express");
const { getRecords } = require("../Controllers/catalogdish");

const router = express.Router();

router.get("/", getRecords);

module.exports = router;
