const express = require("express");
const router = express.Router();
const { getAllTax, knowYourTax } = require("../controllers/taxController");
router.route("/").get(getAllTax).post(knowYourTax);
module.exports = router;
