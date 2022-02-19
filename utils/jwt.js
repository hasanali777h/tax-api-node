const jwt = require("jsonwebtoken");
const Tax = require("../models/taxModel");
const createJWT = () => {
  return jwt.sign(
    { monthlyIncome: Tax.monthlyIncome },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};
module.exports = createJWT;
