
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS:30000,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("Database connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
