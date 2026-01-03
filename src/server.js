const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
require("dotenv").config();

const app = express();






// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// Import routes
const authRoutes = require("./routes/auth");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB atlas connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Test route
app.get("/", (req, res) => {
  res.send("E-Commerce API is running 🚀");
});

// server.js
app.use("/api/auth", require("./routes/auth.js"));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
