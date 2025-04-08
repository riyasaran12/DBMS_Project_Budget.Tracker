// controllers/devController.js
const Income = require("../models/Income");
const Expense = require("../models/Expense");

exports.addDummyData = async (req, res) => {
  try {
    const userId = req.user.id;

    const dummyIncomes = [
      { source: "Salary", amount: 5000, date: new Date(), userId },
      { source: "Freelance", amount: 600, date: new Date(), userId },
    ];

    const dummyExpenses = [
      { category: "Food", amount: 200, date: new Date(), userId },
      { category: "Transport", amount: 100, date: new Date(), userId },
      { category: "Shopping", amount: 300, date: new Date(), userId },
    ];

    await Income.insertMany(dummyIncomes);
    await Expense.insertMany(dummyExpenses);

    res.status(201).json({ message: "Dummy income and expense data added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add dummy data", error });
  }
};
