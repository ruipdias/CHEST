const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Dummy Data for Testing
const dummyExpenses = [
    { id: 1, description: 'Test Expense 1', amount: 100, category: 'Food' },
    { id: 2, description: 'Test Expense 2', amount: 200, category: 'Transport' },
];

// Dummy Routes for Testing
app.get('/api/expenses', (req, res) => {
    res.json(dummyExpenses);
});

app.get('/api/auth/test', (req, res) => {
    res.send('Auth route working');
});

app.get('/api/expenses/test', (req, res) => {
    res.send('Expenses route working');
});

// Optional MongoDB Connection
if (process.env.USE_MONGO === 'true') {
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/chest');

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
