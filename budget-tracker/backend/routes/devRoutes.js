const express = require("express");
const router = express.Router();
const Income = require("../models/Income");
const Expense = require("../models/Expense");
const { protect } = require("../middleware/authMiddleware");

router.post("/seed", protect, async (req, res) => {
  const userId = req.user.id;

  try {
    // Sample income
    const incomes = [
      { userId, source: "Freelancing", amount: 3000, date: new Date() },
      { userId, source: "Scholarship", amount: 2000, date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000) },
      { userId, source: "Gift", amount: 600, date: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000) },
    ];

    // Sample expense
    const expenses = [
      { userId, category: "Groceries", amount: 200, date: new Date() },
      { userId, category: "Travel", amount: 150, date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) },
      { userId, category: "Food", amount: 250, date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000) },
    ];

    await Income.insertMany(incomes);
    await Expense.insertMany(expenses);

    res.status(200).json({ message: "Dummy data seeded successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error seeding data" });
  }
});

module.exports = router;
