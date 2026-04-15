require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const app = express();

// Set up CORS and security first
app.use(cors({
  origin: ["http://localhost:3000", "https://elecmoon-backend.vercel.app"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(express.json({ limit: "4mb" }));
app.set("trust proxy", 1);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Import database connection and routes
const { connectDB } = require("../config/db");
const productRoutes = require("../routes/productRoutes");
const customerRoutes = require("../routes/customerRoutes");
const adminRoutes = require("../routes/adminRoutes");
const orderRoutes = require("../routes/orderRoutes");
const customerOrderRoutes = require("../routes/customerOrderRoutes");
const categoryRoutes = require("../routes/categoryRoutes");
const couponRoutes = require("../routes/couponRoutes");
const attributeRoutes = require("../routes/attributeRoutes");
const settingRoutes = require("../routes/settingRoutes");
const currencyRoutes = require("../routes/currencyRoutes");
const languageRoutes = require("../routes/languageRoutes");
const notificationRoutes = require("../routes/notificationRoutes");
const leadRoutes = require("../routes/leadRoutes");
const blogRoutes = require("../routes/blogRoutes");
const serviceRoutes = require("../routes/serviceRoutes");
const commentRoutes = require("../routes/commentRoutes");
const reviewRoutes = require("../routes/reviewRoutes");
const batteryServiceRoutes = require("../routes/batteryServiceRoutes");
const shortVideoRoutes = require("../routes/shortVideoRoutes");
const { isAuth, isAdmin } = require("../config/auth");

// Connect to Database
connectDB();

// API Routes
app.use("/api/products/", productRoutes);
app.use("/api/category/", categoryRoutes);
app.use("/api/coupon/", couponRoutes);
app.use("/api/customer/", customerRoutes);
app.use("/api/order/", isAuth, customerOrderRoutes);
app.use("/api/attributes/", attributeRoutes);
app.use("/api/setting/", settingRoutes);
app.use("/api/currency/", isAuth, currencyRoutes);
app.use("/api/language/", languageRoutes);
app.use("/api/notification/", isAuth, notificationRoutes);
app.use("/api/leads/", leadRoutes);
app.use("/api/blogs/", blogRoutes);
app.use("/api/services/", serviceRoutes);
app.use("/api/comments/", commentRoutes);
app.use("/api/reviews/", reviewRoutes);
app.use("/api/battery-service/", batteryServiceRoutes);
app.use("/api/short-videos/", shortVideoRoutes);

// Admin and Order Management Routes
app.use("/api/admin/", adminRoutes);
app.use("/api/orders/", orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  if (res.headersSent) return next(err);
  res.status(err.status || 500).json({ 
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err : {}
  });
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "..", "public")));

// Serve the index.html file for all non-API routes
app.get("*", (req, res) => {
  const indexPath = path.join(__dirname, "..", "public", "index.html");
  if (require("fs").existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send("Backend is running! Frontend build is not yet deployed.");
  }
});

const PORT = process.env.PORT || 5058;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
