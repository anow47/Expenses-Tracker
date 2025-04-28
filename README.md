# 📒 Expenses Tracker - MERN App

A fullstack MERN (MongoDB, Express, React, Node) app that lets users **register/login**, **add expenses**, **visualize expenses in charts**, and **track their spending** over time.

---

## Tech Stack
- **Frontend:** React, Axios, Recharts, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens), bcrypt.js
- **Hosting:** (optional later) Vercel (frontend), Render (backend), MongoDB Atlas (database)

---

## 🛠 Features
- User **registration** and **login**
- Secure **JWT authentication**
- **Add**, **view**, and **manage expenses**
- **Charts** to visualize expenses by category or month
- Responsive and mobile-friendly UI
- Protected routes for logged-in users only
- Error handling on both frontend and backend

---

## 📂 Project Structure

```
/backend
  /controllers
  /models
  /routes
  server.js
  .env

/frontend
  /src
    /components
    /pages
    /services
    App.jsx
    main.jsx
```

---

## 🧩 API Endpoints (Backend)

| Method | Route | Description |
|:------|:------|:------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login user and get token |
| `POST` | `/api/expenses/` | Create a new expense (Protected) |
| `GET` | `/api/expenses/` | Get all expenses for user (Protected) |

---

## ⚙️ Setup and Installation

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

- Create a `.env` file:
  ```env
  MONGO_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  ```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

---

## 🔒 Environment Variables

Create a `.env` file in your `/backend` directory with:

```plaintext
MONGO_URI=your_mongo_db_atlas_connection
JWT_SECRET=your_super_secret_key
PORT=5000
```

---

## 📊 Charts

This app uses **Recharts** to create:
- **Pie Chart:** Expenses per category
- **Bar Chart:** Expenses per month

*(Expandable later if you want line charts or date ranges!)*

---

## 🌍 Deployment (optional)
- **Frontend:** [Vercel](https://vercel.com/)
- **Backend:** [Render](https://render.com/) or [Railway](https://railway.app/)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 🙌 Future Improvements
- Password reset functionality
- Admin dashboard (view all users)
- Allow editing/deleting expenses
- More complex filters (date ranges, categories)
- Light/Dark mode toggle

---

## 📸 Screenshots (optional)
*(Later when you finish UI, add screenshots here of Login page, Dashboard page, Charts page.)*
