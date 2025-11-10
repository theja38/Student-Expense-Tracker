🎓 Student Expense Tracker (React + Express + MongoDB)

A clean, student-focused expense tracker that helps you stay on top of canteen spending, travel costs, hostel payments, college fees, and all the random stuff in between.
Symbolic icons make everything quick to scan and easy to use.

✨ Features

  🔐 Login / Signup (JWT Auth)

  📊 Dashboard Overview

  ➕ Add Expense / ❌ Delete Expense

  🗂️ Category-wise Filters

  🍔 🚌 🏠 🎓 🛍️ Student-specific categories

  📅   Date filters

  📈 Pie + Bar charts (Recharts)

  💰 Automatically shows remaining balance

  📱 Fully responsive UI

  bcrypt for password hashing

🛠 Tech Stack
Frontend:

  React (Vite)

  Tailwind CSS

  Recharts

  Axios

Backend:

  Node.js

  Express.js

  MongoDB + Mongoose

  JWT Authentication

🚀 How to Run Locally

1️⃣ Clone the repository

    git clone https://github.com/theja38/student-expense-tracker.git
    cd student-expense-tracker


🖥️ Backend Setup (Express + MongoDB)

2️⃣ Navigate to backend

    cd backend

3️⃣ Install dependencies

    npm install

4️⃣ Create .env

    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET=supersecretvalue
    PORT=5000

5️⃣ Start backend

    npm start
Runs on → http://localhost:5000

🎨 Frontend Setup (React + Vite)

6️⃣ Navigate to frontend

    cd frontend

7️⃣ Install dependencies

    npm install

8️⃣ Create .env

    VITE_API_URL=http://localhost:5000

9️⃣ Start frontend

    npm run dev

Runs on → http://localhost:5173

🔐 Test Users

Create a new account from the signup page — no preloaded users needed.

📈 Dashboard Includes:

Total spent

Remaining balance

Top category


🧩 API's
Month summary

Pie chart (category wise)

Bar chart (monthly spending)

📄 License

MIT License

