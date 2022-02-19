// const Tax = require('./taxMongoose')
// require("./taxMongoose");
const createJWT = require("../utils/jwt");
const taxCalculator = (monthlyIncome) => {
  const taxSlab = [
    { per: 0, start: 0, end: 600000 },
    { per: 0.05, start: 600000, end: 1200000 },
    { per: 30000.1, start: 1200000, end: 1800000 },
    { per: 90000.15, start: 1800000, end: 2500000 },
    { per: 195000.175, start: 2500000, end: 3500000 },
    { per: 370000.2, start: 3500000, end: 5000000 },
    { per: 670000.225, start: 5000000, end: 8000000 },
    { per: 1345000.25, start: 8000000, end: 12000000 },
    { per: 2345000.275, start: 12000000, end: 30000000 },
    { per: 7295000.3, start: 30000000, end: 50000000 },
    { per: 13295000.325, start: 50000000, end: 75000000 },
    { per: 21420000.35, start: 75000000, end: Infinity },
  ];

  let taxSlabData = [];

  taxSlab.forEach((income) => {
    if (monthlyIncome > income.end) {
      taxSlabData.push(Math.round((income.end - income.start) * income.per));
    }

    if (monthlyIncome >= income.start && monthlyIncome <= income.end) {
      taxSlabData.push(Math.round((monthlyIncome - income.start) * income.per));
    }
  });

  const payableTax = taxSlabData.reduce(
    (total, amount) => (total += amount),
    0
  );
  const netSalary = monthlyIncome - payableTax;
  const yearlyIncome = monthlyIncome * 12;
  const yearlyIncomeTax = payableTax * 12;
  const yearlyNetSalary = netSalary * 12;
  const token = createJWT();
  console.log(`taxSlabData: ${taxSlabData}`);

  return {
    MonthlyIncome: monthlyIncome,
    MonthlyIncomeTax: payableTax,
    MonthlyNetSalary: netSalary,
    YearlyIncome: yearlyIncome,
    YearlyIncomeTax: yearlyIncomeTax,
    YearlyNetSalary: yearlyNetSalary,
    Token: token,
  };
};
module.exports = { taxCalculator };
