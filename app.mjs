import express from "express";
import connectToDatabase from "./helper.js";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>hi there</h2>");
});

await connectToDatabase();

app.listen(3000);
