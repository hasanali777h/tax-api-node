require("dotenv").config();
const http = require("http");
const app = require("./app");
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 3001;
const DB = process.env.MONGO_URL;
const server = http.createServer(app);
const start = async () => {
  try {
    await connectDB(DB);
    console.log("DB Connected...");
    server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
