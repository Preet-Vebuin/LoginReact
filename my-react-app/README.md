# 📌 Login & Role-Based Authentication System

🚀 A **React-based Authentication System** with **role-based access control** using **Redux, Context API, Joi validation, and Redux Persist** to manage authentication tokens and user details efficiently.

---

## 📌 Features

✅ **Login Page with Validation** (Joi)  
✅ **Role-based Authentication** (Admin, Member)  
✅ **Redux Persist** (Keeps token even after refresh)  
✅ **Context API** (Stores user details like email)  
✅ **Private Routes** (Access control based on roles)  
✅ **Dashboard & Reports Pages**  
✅ **Custom Hooks** (For login data handling)  
✅ **Modular Folder Structure**  

---

## 📁 Folder Structure

```
my-react-app/
│── components/
│   ├── auth/           # Authentication components (Login)
│   ├── dashboard/      # Dashboard UI
│   ├── navbar/         # Navbar component
│   ├── notFound/       # 404 Page
│   ├── report/         # Reports Page
│── context/            # Context API for user state management
│── data/               # Static JSON data (e.g., reports, charts)
│── hooks/              # Custom React hooks
│── routes/             # Private and public routes
│── store/              # Redux store configuration
│── utils/              # Utility functions
│── validations/        # Joi input validation
│── App.tsx             # Main Application Component
│── main.tsx            # Entry Point
```

---

## 🛠️ Technologies Used

- **React.js** ⚛️
- **TypeScript** 📜
- **Redux Toolkit & Redux Persist** 🔥
- **Context API** 📌
- **Joi Validation** ✅
- **React Router** 🚦
- **Material UI** 🎨
- **Recharts (For Graphs & Reports)** 📊

---


---

## 🚀 Installation & Setup

1️⃣ **Clone the Repository**
```bash
git clone https://github.com/Preet-Vebuin/LoginReact.git
cd my-react-app
```

2️⃣ **Install Dependencies**
```bash
npm install
```

3️⃣ **Run the Application**
```bash
npm run dev
```

4️⃣ **Access the App:** Open `http://localhost:5173/` in your browser.

---

## 🔐 Role-Based Access

| Role   | Access |
|--------|--------|
| **Admin**  | Dashboard, Reports |
| **Member** | Dashboard Only |

---

## 📬 Feedback & Contribution

🔹 Found an issue? **Report it!**  
🔹 Want to contribute? **Fork & send PRs!**  



---

🔥 **Developed by [Preet Patel](https://github.com/Preet-Vebuin)**

