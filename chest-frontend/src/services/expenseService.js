// src/services/expenseService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getExpenses = async () => {
    const response = await axios.get(`${API_URL}/expenses`);
    return response.data;
};

export const addExpense = async (expense) => {
    const response = await axios.post(`${API_URL}/expenses/add`, expense);
    return response.data;
};
