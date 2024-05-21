# API Documentation

## Endpoints

### User Authentication
- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and return a JWT.

### Expenses
- **GET /api/expenses**: Get all expenses for the logged-in user.
- **POST /api/expenses**: Add a new expense.
- **PUT /api/expenses/:id**: Update an existing expense.
- **DELETE /api/expenses/:id**: Delete an expense.

## Example Request and Response

### POST /api/auth/signup

**Request:**
```json
{
  "username": "johndoe",
  "password": "password123"
}
