// import express from "express";
// import connectToDatabase from "./helpers.mjs";
const express = require("express");
const app = express();
const config = require("./config/config");

app.get("/", (req, res) => {
  res.send("<h2>hi there</h2>");
});

// await connectToDatabase();

app.listen(config.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
