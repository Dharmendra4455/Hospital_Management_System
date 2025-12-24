 🏥 Hospital Management System

A web-based **Hospital Management System (HMS)** designed to simplify and automate hospital operations such as patient management, appointments, doctor coordination, and medical records.  
This project focuses on improving efficiency, accuracy, and accessibility for hospital staff and patients.

---

 📌 Features

 👨‍⚕️ Patient Management
- Add, update, and view patient details
- Maintain patient medical history
- Track patient status and visits

 🗓️ Appointment Management
- Book appointments with doctors
- Update appointment status (Pending, Confirmed, Completed)
- View appointment history

 🩺 Doctor Management
- Manage doctor profiles and availability
- Assign doctors to patients
- View scheduled appointments

📋 Medical Records
- Store diagnosis and treatment details
- Track patient progress
- Maintain visit-wise records

 🔐 Authentication & Security
- Role-based access (Admin / Doctor / Staff)
- Secure login and authorization
- Protected API routes

---

 🛠️ Tech Stack

 Frontend
- React.js
- HTML5
- CSS3 / Tailwind CSS
- JavaScript (ES6+)

 Backend
- Node.js
- Express.js

Database
- MongoDB
- Mongoose ODM

Tools & Utilities
- Postman (API Testing)
- Git & GitHub
- JWT Authentication

 📂 Project Structure
hospital-management-system/
│
├── client/ # Frontend (React)
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── services/
│
├── server/ # Backend (Node + Express)
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── middleware/
│
├── .env
├── package.json
└── README.md


---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/hospital-management-system.git

2️⃣ Backend setup
cd server
npm install
npm run dev

3️⃣ Frontend setup
cd client
npm install
npm run dev

🌐 Environment Variables

Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

📸 Screens (Optional)

Login Page

Patient Dashboard

Appointment Management

Doctor Panel

🎯 Learning Outcomes

Built RESTful APIs using Express.js

Implemented authentication & authorization

Hands-on experience with MongoDB & Mongoose

Improved React component structure and state management

Worked on real-world hospital workflow logic

👨‍💻 Author

Dharmendra Patel
Final Year B.Tech CSE Student
MERN Stack Developer
GitHub: https://github.com/Dharmendra4455
