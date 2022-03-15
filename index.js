const exec = require("child_process").exec;
const express = require("express");

const normalizePort = require("./src/utils/normalize-port");
const getRoutes = require("./src/loaders/routes");

const app = express();
const port = normalizePort(process.env.PORT);

app.listen(port, () => {
  let url = `http://localhost:${port}`;
  let /* Styling variables for console */
    resetStyles = "\x1b[0m",
    bold = "\x1b[1m",
    grey = "\x1b[2m",
    blue = "\x1b[34m";
  /* End variables */

  const start = () => {
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

getRoutes(app);
