require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

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
const { isAuth, isAdmin } = require("../config/auth")

connectDB();
const app = express();

app.set("trust proxy", 1);

app.use(cors({
  origin: ["http://localhost:3000", "https://elecmoon-backend.vercel.app"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(express.json({ limit: "4mb" }));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));


// root route - commented out to allow frontend serving
// app.get("/", (req, res) => {
//   res.send("App works properly!");
// });

//this for route will need for store front, also for admin dashboard
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

//if you not use admin dashboard then these two route will not needed.
app.use("/api/admin/", adminRoutes);
app.use("/api/orders/", orderRoutes);

// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ message: err.message });
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



app.listen(PORT, () => console.log(`server running on port ${PORT}`));
