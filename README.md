# 📰 NewsHub

NewsHub is a simple **news CMS application** with administrative capabilities. This repository contains both the **backend API** and the **frontend React app**.

---

## 💻 Features

### Backend
The backend API provides robust functionality for content management:
* **Admin Authentication:** Secure access using **JWT-based** authentication.
* **CRUD Operations for Articles:** Full control over articles (*Create, Read, Update, Delete*).
* **Article Metadata:** Comprehensive data structure including **Title**, **Slug**, **Content**, **Excerpt**, **Category**, **Author**, **Image URL**, **Publish Date**, and **Tags**.
* **Pagination and Search Support:** Efficient handling of large article collections.
* **Protected Admin Routes:** Secure access control for administrative tasks.
* **Error Handling:** Proper status codes for effective error communication.

### Frontend
The frontend provides a rich user experience for both readers and administrators:
* **Browse Latest Articles:** Easy access to the newest content.
* **View Single Article:** Renders full article content, supporting **markdown**.
* **Search and Filter:** Capability to search for articles and **filter by category**.
* **Admin Dashboard:** Dedicated interface for managing articles.
* **Article Management:** Tools to **Create, Edit, and Delete** articles.
* **Authentication-Protected Admin Routes:** Ensures only authorized users can access management features.

---

## 🛠 Tech Stack

The NewsHub application is built using a modern and powerful technology stack:

| Component | Technologies Used |
| :--- | :--- |
| **Backend** | **Node.js**, **Express**, **TypeScript**, **MongoDB**, **Mongoose**, **JWT** |
| **Frontend** | **React**, **TypeScript**, **Tailwind CSS**, **React Router**, **Axios** |

---

## ⚡ Getting Started

Follow these steps to get the NewsHub application running locally.

## 🏗️ Architecture

```
+---------------------------+
|       React Frontend     |
|---------------------------|
| - Mode toggle (SSE/Search)|
| - Log filters + form UI   |
| - Fetch API + EventSource |
+---------------------------+
           │
           ▼
+---------------------------+
|       Express Backend     |
|---------------------------|
| - POST /logs              |
| - GET /logs/search        |
| - GET /logs (SSE)         |
| - Joi validation          |
| - In-memory SSE clients   |
+---------------------------+
```

---

## 🧰 Technology Stack

### Backend
- **Node.js + Express** – Core API and SSE server
- **Joi** – Schema validation for request body
- **CORS + dotenv + nodemon + tsx** – Development utilities

### Frontend
- **React + Vite** – Lightweight modern frontend
- **Axios API** – API communication and SSE handling
- **Tailwind css** – Responsive and user-friendly layout

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/woruz/new-backend.git
cd new-backend
```

### 2. Install dependencies

```bash
# Backend
npm install

```

### 3. Run the seed file

```bash
npm run seed
```

### 4. Start the application

```bash
npm run dev

---

## ✅ API Reference

### `POST /api/auth/login`

Admin login. Returns a JWT token.

```json payload
{
  "username": "admin",
  "password": "admin123"
}

```json response
{
  "token": "your_jwt_token_here"
}


Get all articles.
### `GET /api/articles?page=1&limit=6&category=Technology&q=AI`

```json
{
  "articles": [
    {
      "_id": "64f8e3a1b1234567890abcd",
      "title": "Example Article",
      "slug": "example-article",
      "content": "Full article content...",
      "excerpt": "Short summary...",
      "category": "Technology",
      "author": { "name": "John Doe" },
      "imageUrl": "https://example.com/image.jpg",
      "publishedAt": "2025-10-17T00:00:00Z",
      "tags": ["AI", "Tech"],
      "readingTime": 5
    }
  ],
  "totalPages": 3,
  "currentPage": 1
}


Get articles by id.
### `GET /api/articles/:id`

```json
{
  "article": {
    "_id": "64f8e3a1b1234567890abcd",
    "title": "Example Article",
    "slug": "example-article",
    "content": "Full article content...",
    "excerpt": "Short summary...",
    "category": "Technology",
    "author": { "name": "John Doe" },
    "imageUrl": "https://example.com/image.jpg",
    "publishedAt": "2025-10-17T00:00:00Z",
    "tags": ["AI", "Tech"],
    "readingTime": 5
  }
}

Create a new articles.
### `POST /api/articles`(Protected)

```json payload
{
  "title": "New Article",
  "slug": "new-article",
  "content": "Article content...",
  "excerpt": "Short summary...",
  "category": "Technology",
  "author": { "name": "John Doe" },
  "imageUrl": "https://example.com/image.jpg",
  "publishedAt": "2025-10-17T00:00:00Z",
  "tags": ["AI", "Tech"]
}

```json response
{
  "_id": "64f8f1b2b1234567890efgh",
  "title": "New Article",
  "slug": "new-article",
  "content": "Article content...",
  "excerpt": "Short summary...",
  "category": "Technology",
  "author": { "name": "John Doe" },
  "imageUrl": "https://example.com/image.jpg",
  "publishedAt": "2025-10-17T00:00:00Z",
  "tags": ["AI", "Tech"],
  "readingTime": 5
}

Update an articles.

###PUT /api/articles/:id (Protected)

```json payload
{
  "_id": "64f8f1b2b1234567890efgh",
  "title": "Updated Article",
  "slug": "updated-article",
  "content": "Updated content...",
  "excerpt": "Updated summary...",
  "category": "Technology",
  "author": { "name": "John Doe" },
  "imageUrl": "https://example.com/image.jpg",
  "publishedAt": "2025-10-17T00:00:00Z",
  "tags": ["AI", "Tech"],
  "readingTime": 6
}

Delete an articles.

### DELETE /api/articles/:id (Protected)
```

---

## 📁 Folder Structure

```
newshub-backend/
├── src/
│   ├── controllers/       # Route handlers for auth & articles
│   ├── middlewares/       # JWT auth middleware, validation
│   ├── models/            # Mongoose models (Article, Admin)
│   ├── routes/            # Express routes (authRoutes, articleRoutes)
│   ├── utils/             # Helper functions
│   └── app.ts             # Starting the server
|   └── server.ts          # App entry point
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

---

## 🧠 Future Enhancements
    ✅ Add image upload support (S3 or local storage)
    ✅ Role-based admin access
    ✅ Rate limiting & security headers
    ✅ Rich text editor for articles
    ✅ Dashboard analytics for article stats
    ✅ Move to PostgreSQL or MySQL for structured data storage

---

## 👨‍💻 Author

Made with ❤️ by [Woruz](https://github.com/woruz)

