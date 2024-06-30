const Expense = require('../models/expense');

exports.addExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).send(expense);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.status(200).send(expenses);
    } catch (error) {
        res.status(500).send(error);
    }
};
