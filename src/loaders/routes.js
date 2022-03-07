import express from "express";

export const getRoutes = (__dirname, app) => {
  let router = express.Router();
  let clientPath = __dirname + "/src/";

  // ........................ Assets route ........................
  app.use("/assets", express.static(clientPath + "assets"));

  // ........................ Home route ........................
  app.get("/", (_req, res) => {
    res.sendFile(clientPath + "index.html");
  });

  app.use("/", router);

  // ........................ List Route ........................
  app.get("/list", (_req, res) => {
    res.sendFile(clientPath + "/pages/list.html");
  });

  // ........................ Redirect Route ........................
  //Automatically redirect any invalid paths to home
  //TODO Redirect to custom error page
  app.get("*", (_req, res) => {
    res.redirect("/");
  });
};
