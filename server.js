import express from "express";

const app = express();

const port = 3000;

app.get("/", async (req, res) => {
    res.send("Hey, My dove!");
})


app.listen(port, () => {
    console.log("Server is running:", `${port}`);
})