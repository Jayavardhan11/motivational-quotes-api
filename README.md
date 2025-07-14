# 💬 Motivational Quotes API

A simple RESTful API built with Node.js and Express to manage motivational quotes.

---

## 📁 Features

- Get all quotes
- Get a random quote
- Get a quote by ID
- Add a new quote
- Update a quote by ID
- Delete a quote by ID
- CORS enabled for browser usage

---

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Jayavardhan11/motivational-quotes-api.git
cd motivational-quotes-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm start
# OR for development:
npm run dev
```

### 4. Visit
```
http://localhost:3000/
```

---

## 📌 API Endpoints

All endpoints are prefixed with `/api`.

| Method | Route                  | Description                |
|--------|------------------------|----------------------------|
| GET    | `/api/quotes`          | Get all quotes             |
| GET    | `/api/quotes/random`   | Get a random quote         |
| GET    | `/api/quotes/:id`      | Get a quote by ID          |
| POST   | `/api/quotes`          | Add a new quote            |
| PUT    | `/api/quotes/:id`      | Update quote by ID         |
| DELETE | `/api/quotes/:id`      | Delete quote by ID         |

---

## 📦 Project Structure

```
motivational-quotes-api/
├── server.js
├── routes/
│   └── quoteRoutes.js
├── data/
│   └── quotes.json
├── package.json
├── .gitignore
└── LICENSE
```

---

## 🧠 Future Improvements

- Add a MongoDB database for persistent storage
- Add authentication
- Deploy to Render or Railway

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE) © 2025 Jayavardhan Atti.
