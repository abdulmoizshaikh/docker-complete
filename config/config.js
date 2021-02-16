require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
};

console.log("PORT in config js", PORT);
