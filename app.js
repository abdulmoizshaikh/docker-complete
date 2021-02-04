// import express from "express";
// import connectToDatabase from "./helpers.mjs";
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h2>hi there</h2>");
});

// await connectToDatabase();

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
