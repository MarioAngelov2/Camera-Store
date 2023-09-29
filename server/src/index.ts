require("dotenv").config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose, { mongo } from "mongoose";
import router from "./routes/router";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose
    .connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));

app.use("/", router);

app.listen(3001, () => console.log("Server running on port 3001"));
