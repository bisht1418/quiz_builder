const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectDB } = require("./db");
const { authRouter } = require("./routes/auth.routes");
const { quizRouter } = require("./routes/quiz.routes");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8080;

app.use("/api", authRouter);
app.use("/api", quizRouter);

app.listen(port, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
  }
  console.log(`connected to the port ${port}`);
});
