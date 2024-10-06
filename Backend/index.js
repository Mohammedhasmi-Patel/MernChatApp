import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRoute from "./Routes/User.route.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());

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
app.use("/user", UserRoute);

app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
