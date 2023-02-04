const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const brandRoute = require("./routes/brand");

const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());

app.use(express.json());

app.use("/api/brands", brandRoute);

app.listen(port, () => {
  console.log("Backend Server is Running on Port 5000`");
});
