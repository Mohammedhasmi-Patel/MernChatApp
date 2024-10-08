import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRoute from "./Routes/User.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

dotenv.config();
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:8000", // Frontend URL where your React app is running
    credentials: true, // Allow sending cookies with cross-origin requests
  })
);
app.use(cookieParser());

try {
  await mongoose.connect(process.env.MONGODBURI);
  console.log("database connection successful");
} catch (error) {
  console.log(`database connection error ${error}`);
}

app.get("/", (req, res) => {
  res.send("Hello Hasmi");
});

// routing
app.use("/api/user", UserRoute);

app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
