const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const brandRoute = require("./routes/brand");

dotenv.config();

app.use(cors());

app.use(express.json());

app.use("/api/brands", brandRoute);

app.listen(5000, () => {
  console.log("Backend Server is Running on Port 5000`");
});
