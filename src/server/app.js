// //////////////////////////
// Load the Required Modules
const express = require("express");
const mongoose = require("mongoose");

const dbConfig = require("../config/db.config");
const getRoutes = require("../routes");
const normalizePort = require("./normalizePort");

const app = express();

// /////////////////
// Port declaration
const port = normalizePort(process.env.PORT);

// //////////////////////
// Controllers or Routes
getRoutes(app);

// ////////////////
// MongoDB Promise
const server = mongoose.connect(
  `mongodb+srv://${dbConfig.USER}:${dbConfig.PWD}@${dbConfig.HOST}/${dbConfig.DB}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// ////////////////////////////////
// Setup server to start listening
server.then(() => {
  app.listen(port, () => {
    let url = `http://localhost:${port}`;
    let /* Styling variables for console */
      resetStyles = "\x1b[0m",
      bold = "\x1b[1m",
      grey = "\x1b[2m",
      blue = "\x1b[34m";
    /* End variables */

    // eslint-disable-next-line no-console
    console.log(
      `App now ${bold}running${resetStyles} on port ${blue}${port}${resetStyles}\n${grey}URL : ${url}${resetStyles}`
    );
  });
});

// ///////////////////////////
// Error checker for mongoose
const co = mongoose.connection;
co.on("error", console.error.bind(console, "MongoDB connection error:"));
