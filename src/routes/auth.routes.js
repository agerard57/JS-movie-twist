const verifySignUp = require("../middlewares/verifySignUp");
const controller = require("../controllers/auth.controller");

module.exports = function (app, express, srcPath) {
  app.get("/login", (_req, res) => {
    res.sendFile(srcPath + "pages/auth/auth.html");
  });

  app.use(
    "/assets/scripts/login/signup.js",
    express.static(srcPath + "pages/auth/auth.js")
  );

  app.post(
    "/auth/signup",
    [verifySignUp.checkDuplicateUsername],
    controller.signup
  );
};
