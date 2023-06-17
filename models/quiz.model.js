const { Schema, model } = require("mongoose");
const quizSchema = new Schema({
  creator: String,
  title: String,
  description: String,
  questions: [
    {
      title: String,
      answerOptions: [String, String, String, String],
      correctOptions: [String],
    },
  ],
  leaderBoard: [{ email: String, score: Number }],
});
const quizModel = model("quiz", quizSchema);
module.exports = { quizModel };
