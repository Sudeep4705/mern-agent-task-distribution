# mern-agent-task-distribution

# MERN Stack Admin Panel – Agent Task Distribution System

This project is a MERN stack application built as part of a machine test.  
It allows an **admin user** to log in, manage agents, upload a CSV file, and automatically distribute tasks equally among agents.

---

## 🚀 Features

### ✅ Admin Authentication
- Secure admin login using JWT
- Session maintained using HTTP-only cookies

### ✅ Agent Management
- Admin can add agents
- Each agent includes:
  - Name
  - Email
  - Mobile number (with country code)
  - Password

### ✅ CSV Upload & Task Distribution
- Upload CSV files (`.csv`, `.xls`, `.xlsx`)
- CSV must contain:
  - `FirstName`
  - `Phone`
  - `Notes`
- Tasks are distributed **equally among 5 agents**
- Remaining tasks are assigned sequentially
- Distributed tasks are stored in MongoDB

### ✅ View Distributed Lists
- Admin can view all tasks
- Tasks are displayed agent-wise with:
  - Agent name & email
  - Assigned FirstName, Phone, Notes

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **File Upload:** Multer
- **CSV Parsing:** csv-parser

---

Backend Setup
cd backend
npm install
npm start

Frontend Setup
cd frontend
npm install
npm run dev

