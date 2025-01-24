import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/app.routes.js";
import connectMongoDB from "./db/connectMongoDb.js";

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
