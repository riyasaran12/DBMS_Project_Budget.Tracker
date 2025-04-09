require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const devRoutes = require("./routes/devRoutes"); // ✅ Added for dummy data

const app = express();

// Middleware to handle CORS
app.use(
  cors({
    origin: "https://dbms-project-budget-tracker-15.onrender.com", // ✅ Allow only your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Optional: needed if you're sending cookies/auth tokens
  })
);
app.options("*", cors()); // handles preflight requests

app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/dev", devRoutes); // ✅ New route for testing dummy data

// Static folder for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
