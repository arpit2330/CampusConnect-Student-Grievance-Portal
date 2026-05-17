# Campus Connect – Student Grievance Portal

A full-stack MERN application developed for managing and resolving student grievances efficiently inside an institution. The system provides transparency, faster issue resolution, and structured communication between students and administration.

---

# Tech Stack

## Frontend
- React.js
- Redux (Optional)
- Axios
- Tailwind CSS / Bootstrap

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose ODM

---

# Main Features

## Student Module
- Secure Registration & Login
- JWT Authentication
- Submit grievances with category and description
- Track grievance status
- View grievance history

## Admin Module
- Dashboard to manage grievances
- View all complaints
- Update grievance status
- Assign priorities
- Manage users

## Security Features
- JWT-based Authentication
- Protected Routes
- Password Hashing using bcrypt

---

# Folder Structure

```bash
Campus-Connect/

├── client/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Node + Express Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

# Authentication Flow

## Registration
Students can create accounts securely using:
- Name
- Email
- Password

Passwords are encrypted using bcrypt before storing into MongoDB.

## Login
- User enters email and password
- Backend verifies credentials
- JWT token is generated
- Token is used for protected API access

---

# Grievance Management Flow

## Student Side
1. Login/Register
2. Submit grievance
3. Select category
4. Add grievance description
5. Track grievance status

## Admin Side
1. View all grievances
2. Update status
3. Assign priorities
4. Manage users

---

# Database Design (MongoDB + Mongoose)

## User Model
Stores:
- name
- email
- password
- role

## Grievance Model
Stores:
- grievance title
- category
- description
- status
- priority
- student reference
- timestamps

MongoDB relationships are managed using Mongoose ObjectId references.

---

# API Endpoints

## Authentication APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

---

## Grievance APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/grievance/create | Create grievance |
| GET | /api/grievance/all | Fetch all grievances |
| PUT | /api/grievance/update/:id | Update grievance status |

---

# Security Features

## bcrypt Password Hashing
Passwords are securely hashed before database storage.

## Protected Routes
Only authenticated users can access protected APIs.

## Authorization
Admin-only routes are protected using middleware.

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/ayushu2330/CampusConnect-Student-Grievance-Portal
cd campus-connect
```

## Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run Backend:

```bash
npm start
```

---

## Frontend Setup

```bash
cd client
npm install
npm start
```

---

# Future Enhancements

- Email/SMS Notifications
- File/Image Upload Support
- Role-Based Access Control
- AI-Based Grievance Categorization
- Real-Time Chat Support

---

# Testing

## Manual Testing
- API testing using Postman

## Unit Testing
- Jest (Optional)

---

# Real-World Use Case

This system helps institutions:
- Reduce manual complaint handling
- Improve transparency
- Increase response speed
- Maintain digital records efficiently

---

# Interview Questions

## Why JWT?
JWT provides secure and stateless authentication between client and server.

## Why MongoDB?
MongoDB offers flexible schema handling and integrates well with MERN stack applications.

## Why bcrypt?
bcrypt securely hashes passwords and protects user credentials.

## What is Protected Routing?
Protected routing restricts unauthorized users from accessing secure pages or APIs.

## What is Middleware in Express?
Middleware handles:
- Authentication
- Authorization
- Error handling
- Request validation

---

# System Architecture

```text
Frontend (React.js)
        ↓
Axios API Requests
        ↓
Backend (Node.js + Express)
        ↓
Authentication Middleware
        ↓
Controllers
        ↓
MongoDB Database
```

---

# Conclusion

Campus Connect is a complete MERN stack grievance management system demonstrating:
- Full-Stack Development
- Authentication & Authorization
- REST API Development
- MongoDB Integration
- Secure User Management
- Admin Dashboard Functionality
- Real-World Problem Solving
