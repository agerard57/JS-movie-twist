import { exec } from "child_process";
import express, { Router } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { normalizePort } from "./src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();
var router = Router();
var clientPath = __dirname + "/src/";
var port = normalizePort(process.env.PORT);
var server = app.listen(port, () => {
  let port = server.address().port;
  let url = `http://localhost:${port}`;
  let /* Styling variables for console */
    resetStyles = "\x1b[0m",
    bold = "\x1b[1m",
    grey = "\x1b[2m",
    blue = "\x1b[34m";
  /* End variables */
  let start = () => {
    if (process.platform === "darwin") return "open";
    else if (process.platform === "win32") return "start";
    return "xdg-open";
  };

  exec(start() + " " + url);

  // eslint-disable-next-line no-console
  console.log(
    `App now ${bold}running${resetStyles} on port ${blue}${port}${resetStyles}\n${grey}URL : ${url}${resetStyles}`
  );
});

router.get("/", (_req, res) => {
  res.sendFile(clientPath + "index.html");
});

app.use("/", router);

//Automatically redirect any invalid paths to home
//TODO Redirect to custom error page
app.get("*", (_req, res) => {
  res.redirect("/");
});

/* for (var i = 0, n = a.length; i < n; i++) {
  var e = a[i];
  console.log(e);
} */ //TODO Delete : For later usage
