const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use([cors(), express.json(), express.urlencoded({ extended: false })]);
// include routes
const UserRoute = require("./route/userRoute");
// fin include roues
app.use("/auth", UserRoute);

// error
app.use(function (err, req, res, next) {
  const error = {
    message: err.message,
  };

  res.status(err.status || 500);
  res.json({ error });
});
app.listen(port, () => console.log("success connect "));
