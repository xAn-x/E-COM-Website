import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
// import { v4 as uuid } from 'uuid';

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/route.js";

dotenv.config();
const app = express();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
DefaultData();

app.use(express.json());
app.use(cors());
app.use("/", Routes);
