import { dirname } from "path";
import express, { Router } from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();
var router = Router();
var path = __dirname + "/src/";

router.get("/", (_req, res) => {
  res.sendFile(path + "index.html");
});

app.use("/", router);

//Automatically redirect any invalid paths to home
//TODO Redirect to custom error page
app.get("*", (_req, res) => {
  res.redirect("/");
});

//Put bootstrap in a static folder to link it in index.html
app.use("/dist", express.static(__dirname + "/node_modules/bootstrap/dist"));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.info("Live at Port 3000");
});
