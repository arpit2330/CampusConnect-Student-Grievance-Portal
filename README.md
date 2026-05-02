Campus Connect – Student Grievance Portal

A full-stack web application built using the MERN stack that allows students to raise, track, and manage grievances efficiently within an institution. The platform ensures transparency, faster resolution, and structured communication between students and administration.

🚀 Features

👨‍🎓 Student
Register/Login securely (JWT Authentication)
Submit grievances with category & description
Track grievance status (Pending / In Progress / Resolved)
View grievance history

🛠️ Admin
Dashboard to view all grievances
Update grievance status
Assign priorities
Manage users

🔐 Authentication & Security
JWT-based authentication
Protected routes
Password hashing using bcrypt


🧱 Tech Stack
Frontend
React.js
Redux (optional for state management)
Axios
Tailwind CSS / Bootstrap

Backend
Node.js
Express.js

Database
MongoDB (Mongoose ODM)


📁 Project Structure

Campus-Connect/
│
├── client/               # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/               # Node + Express Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
├── .env
├── package.json
└── README.md

⚙️ Installation & Setup

1️⃣ Clone Repository
git clone https://github.com/arpit2330/CampusConnect-Student-Grievance-Portal/edit/master/README.md
cd campus-connect

2️⃣ Setup Backend
cd server
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm start
3️⃣ Setup Frontend
cd client
npm install
npm start


🌐 API Endpoints
Auth Routes
POST /api/auth/register
POST /api/auth/login
Grievance Routes
POST /api/grievance/create
GET /api/grievance/all
PUT /api/grievance/update/:id


📊 Future Enhancements
Email/SMS notifications
File/image upload with grievances
Role-based access (Super Admin, Department Admin)
AI-based grievance categorization
Real-time chat support


🧪 Testing
Manual testing using Postman
Unit testing (optional with Jest)


📌 Use Case

This system helps:

Reduce manual complaint handling
Increase transparency
Improve response time
Maintain digital records


🧑‍💻 Author

Ayushu Singh

Computer Science(AIML)

MERN Stack Developer

⭐ Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

📜 License

This project is licensed under the MIT License.
