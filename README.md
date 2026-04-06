# Finance Dashboard Backend

A full-stack finance management system with authentication, role-based access, and financial record tracking.

---

##  Features

## 1. User & Role Management
- User registration & login (JWT authentication)
- Roles:
  - **Viewer** → Can only view dashboard
  - **Analyst** → Can view records & insights
  - **Admin** → Full access (CRUD + user management)
- Activate/Deactivate users

---

### 2. Financial Records
- Create income/expense records
- Fields:
  - Amount
  - Type (income / expense)
  - Category
  - Date
  - Notes
- Update & delete records
- Filter records by:
  - Type
  - Category
  - Date

---

### 3. Dashboard Summary
- Total Income
- Total Expense
- Net Balance
- Real-time calculations

---

### 4. Access Control
- Role-based authorization using middleware
- Protected routes
- JWT-based authentication

---

### 5. Validation & Error Handling
- Required field validation
- Proper HTTP status codes
- Meaningful error messages

---

### 6. Data Persistence
- MongoDB (via Mongoose)
- Cloud DB: MongoDB Atlas

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

---

##  Setup Instructions

### 1. Clone Repo

```bash
git clone https://github.com/unforgettableg1/finance-backend.git
cd finance-backend