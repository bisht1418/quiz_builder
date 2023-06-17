const { quizModel } = require("../models/quiz.model");

const createQuiz = async (req, res) => {
  try {
    const quiz = new quizModel(req.body);
    await quiz.save();
    res.json(quiz);
  } catch (error) {
    resizeBy.json({ message: error.message });
  }
};

const getQuiz = async (req, res) => {
  try {
    const quiz = await quizModel.find();
    res.json(quiz);
  } catch (error) {
    resizeBy.json({ message: error.message });
  }
};

module.exports = { createQuiz, getQuiz };
