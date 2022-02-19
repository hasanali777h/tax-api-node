const express = require("express");
const morgan = require("morgan");
// const cors = require('cors')
const taxRouter = require("./routes/taxRoutes");
const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use("/api/v1/tax", taxRouter);
app.get("/", (req, res) => {
  res.send("Welcome to Tax API");
});
module.exports = app;
