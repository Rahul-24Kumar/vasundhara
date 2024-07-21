import express from "express";
import connectDB from "./config/database.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
    res.send("Hey, My dove!");
})

app.listen(port, () => {
    console.log("Server is running:", `${port}`);
})