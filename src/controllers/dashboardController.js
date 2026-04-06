const Record = require('../models/Record');

exports.getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach(r => {
      if (r.type === "income") totalIncome += r.amount;
      else totalExpense += r.amount;
    });

    const netBalance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      netBalance
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};