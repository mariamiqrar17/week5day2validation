const mongoose = require("mongoose");
require("dotenv").config();

const {DATABASE_URL} = process.env


const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database connected successfully...");
  } catch (error) {
    throw new Error("Error connecting to the database:", error);
  }
};

module.exports = connectDB;
