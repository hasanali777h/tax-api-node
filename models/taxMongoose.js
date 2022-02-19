const mongoose = require("mongoose");
const taxSchema = new mongoose.Schema(
  {
    monthlyIncome: {
      type: Number,
      required: true,
    },
    monthlyIncomeTax: {
      type: Number,
    },
    yearlyIncome: {
      type: Number,
    },
    yearlyIncomeTax: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Tax = mongoose.model("Tax", taxSchema);
module.exports = Tax;
