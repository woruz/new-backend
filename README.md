# 📰 NewsHub

NewsHub is a simple news CMS application with admin capabilities. This repository contains both the **backend API** and **frontend React app**.

---

## 💻 Features

### Backend
- Admin authentication (JWT-based)
- CRUD operations for articles:
  - Create, Read, Update, Delete
- Article metadata:
  - Title, Slug, Content, Excerpt, Category, Author, Image URL, Publish Date, Tags
- Pagination and search support
- Protected admin routes
- Error handling with proper HTTP status codes

### Frontend
- Browse latest articles
- View single article with markdown content
- Search and filter by category
- Admin dashboard for managing articles
- Create, Edit, Delete articles
- Authentication-protected admin routes

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose, JWT  
- **Frontend:** React, TypeScript, Tailwind CSS, React Router, Axios  

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/woruz/new-backend.git
cd new-backend

### 2. Install Dependencies
npm install

### 3. Create a .env file

Add a .env file in backend/ with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600
ADMIN_USER=admin_username
ADMIN_PASS=admin_password

### 4. Run the seed file

npm run seed

### 5. Run backend

Development (with live reload using tsx):

npm run dev