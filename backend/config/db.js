require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Mongoose 5.13 still needs these options to avoid deprecation warnings
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Note: useFindAndModify and useCreateIndex are deprecated but may still be needed
      // SSL/TLS options for MongoDB Atlas
      ssl: true,
      sslValidate: true,
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
    // More detailed error logging
    if (err.name === 'MongoNetworkError') {
      console.log("Network error - check your MongoDB connection string and network connectivity");
    }
  }
};

module.exports = {
  connectDB,
};
