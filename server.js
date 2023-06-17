const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectDB } = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8080;

app.use("/", (req, res) => {
  res.json({ message: "welcome to quiz api" });
});

app.listen(port, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
  }
  console.log(`connected to the port ${port}`);
});
