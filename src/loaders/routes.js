import { Router } from "express";

export const getRoutes = (__dirname, app) => {
  let router = Router();
  let clientPath = __dirname + "/src/";

  // ........................ Home route ........................
  app.get("/", (_req, res) => {
    res.sendFile(clientPath + "index.html");
  });

  app.use("/", router);

  // ........................ List Route ........................
  app.get("/list", (_req, res) => {
    res.sendFile(clientPath + "/pages/list/list.html");
  });

  //Automatically redirect any invalid paths to home
  //TODO Redirect to custom error page
  app.get("*", (_req, res) => {
    res.redirect("/");
  });
};
