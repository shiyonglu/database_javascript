require("dotenv").config();       // Load environment variables from .env
const express = require("express");
const mysql = require("mysql2");  // Better maintained than mysql
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug: Print env variables (commented by default)
// console.log("DB Config:", {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD ? "****" : "(empty)", // hide real password
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
// });

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "test",  // 👈 default is "test"
    port: process.env.DB_PORT || 3306
});

// Test DB connection
db.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed:", err.stack);
        return;
    }
    console.log("✅ Connected to the database.");
});

// Routes
app.get("/", (req, res) => {
    res.json("Welcome to the DB class.");
});

app.get("/listall", (req, res) => {
    const stmt = "SELECT * FROM students";
    db.query(stmt, (err, data) => {
        if (err) {
            console.error("DB error:", err);
            return res.status(500).json({ error: "Database query failed" });
        }
        return res.json(data);
    });
});

app.get("/student/:id", (req, res) => {
    const studentId = req.params.id;
    console.log(`Fetching student with ID: ${studentId}`);

    const sql = "SELECT * FROM students WHERE id = ?";
    db.query(sql, [studentId], (err, data) => {
        if (err) {
            console.error("DB error:", err);
            return res.status(500).json({ error: "Database query failed" });
        }
        if (data.length === 0) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res.json(data[0]);
    });
});

// Start server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
