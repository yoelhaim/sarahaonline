const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const path = require("path");
///  routes

const protectRoutes = require("./midelwaire/checklogin");
// include routes
const UserRoute = require("./route/userRoute");
const MessageRoute = require("./route/messageRoute");

///
app.use([
  cors(),
  express.json(),
  express.urlencoded({ extended: false }),
  fileUpload({
    createParentPath: true,
  }),
  morgan("dev"),
]);

app.get("/uploads/:id", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/uploads/" + req.params.id));
});
//routes protected
app.get("/msg/all/:id", protectRoutes);
// fin include roues
app.use("/auth", UserRoute);
app.use("/msg", MessageRoute);
//// vue
app.use("*", (req, res, next) => {
  if (req.baseUrl.trim() === "") {
    req.baseUrl = "index.html";
  }
  res.sendFile(path.resolve(__dirname, `./public/${req.baseUrl}`), (err) => {
    if (err) {
      res.sendFile(path.resolve(__dirname, "./public/index.html"));
    }
  });
});
// error
app.use(function (err, req, res, next) {
  const error = {
    message: err.message,
  };

  res.status(err.status || 500);
  res.json({ error });
});
app.listen(port, () => console.log("success connect "));
