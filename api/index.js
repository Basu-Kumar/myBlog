import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import User from "./models/user.model.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connection to database successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("app is running on port 3000!");
});
