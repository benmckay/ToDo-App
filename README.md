
# 🌿 To-Do App

A clean and simple task management web app using Node.js, PostgreSQL, and vanilla HTML/CSS/JS.

## 🎨 Color Palette
- Background: `#18230F`
- Containers: `#27391C`
- Buttons: `#1F7D53`
- Accents: `#255F38`

## 🧰 Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: PostgreSQL

## ⚙️ Setup Instructions

### 1. Clone and Install

```bash
git clone <repo_url>
cd todo-app/backend
npm install
```

### 2. Create PostgreSQL Database

```sql
CREATE DATABASE todo_db;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  priority VARCHAR(10),
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed
INSERT INTO tasks (title, priority) VALUES
('Buy groceries', 'High'),
('Read a book', 'Medium'),
('Clean the house', 'Low');
```

### 3. Configure Environment

Rename `.env.example` to `.env` and update your `DATABASE_URL`.

### 4. Run Backend

```bash
cd backend
node server.js
```

### 5. Open Frontend

Open `frontend/index.html` or serve via:

```bash
cd frontend
npx http-server .
```

Enjoy 🎉
