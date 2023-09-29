require('dotenv').config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(3001, () => console.log('Server running on port 3001'));