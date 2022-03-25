const authController = require("../controllers/auth.controller");
const verifySignUp = require("../middlewares/verifySignUp");

module.exports = function (app, express, srcPath) {
  //Script
  app.use(
    "/assets/scripts/auth/auth.js",
    express.static(srcPath + "pages/auth/auth.js")
  );

  // GET - Login / Signup form
  app.get("/login", (_req, res) => {
    res.sendFile(srcPath + "pages/auth/auth.html");
  });

  // POST - On signup
  app.post(
    "/auth/signup",
    [verifySignUp.checkDuplicateUsername],
    authController.signup
  );

  // POST - On login
  app.post("/auth/login", authController.login);
};
