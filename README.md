# 🗾 Japan Tours API

A website system for booking Japan tours, with a backend API that connects to a MongoDB database for managing tour data and customer bookings.

🔗 Demo: [https://minlada-9.github.io/JapanToursAPI/](https://minlada-9.github.io/JapanToursAPI/)

---

## ✨ Main Features

- Displays a list of popular Japan tours with real-time prices and remaining seats.
- Tour booking form. - Ready to fill in booking information (name, phone number, email, number of people, date, notes)
- Display "My Bookings" in ticket style
- Connect to a MongoDB database via Mongoose to save tour and booking information

---

## 🛠️ Technologies Used

**Backend**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/) — Web framework
- [Mongoose](https://mongoosejs.com/) — MongoDB ODM
- [dotenv](https://www.npmjs.com/package/dotenv) — Manage environment variables
- [cors](https://www.npmjs.com/package/cors) — Allow frontend to call APIs across origins
- [nodemon](https://www.npmjs.com/package/nodemon) — Auto-restart server during development (dev) (Dependency)

**Frontend**
- HTML, CSS, JavaScript (Vanilla JS) — Call the API using `fetch`

**Database**
- MongoDB

---

## 📁 Project Structure

```
japan-tours-mongo/
├── index.html # Frontend webpage
├── server.js # The starting point of the app, connecting to the DB and starting the server
├── src/
│ ├── app.js # Configuring Express app, middleware, and routes
│ └── config/
│ └── db.js # Connecting to MongoDB via Mongoose
├── .env # Environment variables (not committed) (repo)
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the project

```bash
git clone https://github.com/minlada-9/JapanToursAPI.git
cd JapanToursAPI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env` file in the project root and set the following values:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
```

> Change `MONGO_URI` to the connection string of 4. Run the server

```bash
npm start
```

Or, if you want the server to auto-restart when you modify code during development, use:

```bash
npm run dev
```

Upon successful execution, you will see the following message:

```
🚀 Server running at http://localhost:3000
```

### 5. Open the webpage

Open the `index.html` file with a browser (or use the Live Server). The webpage will automatically call the API from `http://localhost:3000`.

> ⚠️ The backend (`npm start`) must be completed before opening the webpage. Otherwise, the tour listings and bookings will not load.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|------------------|-----------------------------------|
| GET | `/api/tours` | Retrieve all tour listings |
| GET | `/api/bookings` | Retrieve all booking listings |
| POST | `/api/bookings` | Create a new booking |

**Example Body for `POST /api/bookings`:**

```json
{
"tour": "<tourId>",
"name": "Somchai Jaidee",
"email": "somchai@example.com",
"phone": "0812345678",
"qty": 2,
"dateBooked": "2026-08-15",
"note": "Adjacent seats required."


---

## 📌 Note

- This project requires the backend (`npm start`) to run continuously while the website is in use, as all tour and booking data is pulled from the API in real-time.
- If the MongoDB connection fails, an error will be displayed and the server will be shut down immediately.

---

## 📄 License

MIT License
