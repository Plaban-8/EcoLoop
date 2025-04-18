import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { controller } from "./app/controller.js";
import cors from "cors";
dotenv.config();

const app = express();

const uri = process.env.URI;

app.use(cors());
app.use(express.json());

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => console.error("❌ Connection error:", err));

controller(app);

app.listen(4000);
