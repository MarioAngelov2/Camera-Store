require("dotenv").config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose, { mongo } from "mongoose";
import router from "./routes/router";
import path from "path";

const PATH_TO_UPLOADS = path.join(__dirname, "../assets/uploads");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(PATH_TO_UPLOADS));
app.use(
    cors({
        credentials: true,
        origin: "http://127.0.0.1:5173",
    })
);

mongoose
    .connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));

app.use("/", router);

app.listen(3001, () => console.log("Server running on port 3001"));
