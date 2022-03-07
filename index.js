import { exec } from "child_process";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { normalizePort } from "./src/index.js";
import { getRoutes } from "./src/loaders/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = normalizePort(process.env.PORT);

const server = app.listen(port, () => {
  const port = server.address().port;
  const url = `http://localhost:${port}`;
  const /* Styling variables for console */
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

getRoutes(__dirname, app);
