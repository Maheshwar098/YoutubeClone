import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // Corrected import statement

dotenv.config(); // Load environment variables from .env file

const app = express();
app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server Running on the PORT ${PORT}`);
});

const DB_URL = process.env.CONNECTION_URL;

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connected");
  })
  .catch((error) => {
    console.log(error);
  });
