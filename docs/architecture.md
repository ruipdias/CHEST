# Architecture and Design Documentation

## High-Level Architecture

- **Front-End**: React
- **Back-End**: Node.js
- **Database**: MongoDB (using Mongoose for ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: undefined

## Component Design

### Front-End Components
- **App**: Main component, includes routing.
- **Navbar**: Navigation bar with links to different sections.
- **Auth**: Components for Login and SignUp forms.
- **Dashboard**: Main user dashboard displaying expenses and budget.
- **ExpenseList**: Lists all expenses.
- **ExpenseForm**: Form for adding/editing an expense.
- **Budget**: Component for setting and displaying budget.
- **Reports**: Component for displaying reports and analytics.

### Back-End Components
- **User Model**: Defines the schema for user data.
- **Expense Model**: Defines the schema for expense data.
- **Auth Routes**: Handles user authentication (sign up, login).
- **Expense Routes**: Handles CRUD operations for expenses.
