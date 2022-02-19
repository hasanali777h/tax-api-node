const Tax = require("../models/taxMongoose");
const { taxCalculator } = require("../models/taxModel");
const getAllTax = async (req, res) => {
  try {
    const tax = Tax.find({}, { _id: 0, __v: 0 });
    return await res.status(200).json(tax);
  } catch (error) {
    res.status(400).json(error);
  }
};
const knowYourTax = async (req, res) => {
  try {
    return await res.status(201).json(taxCalculator());
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getAllTax, knowYourTax };
