import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connection to database successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("app is running on port 3000!");
});
