const express = require("express");
const app = express();
const port = 3000;

// include routes
const UserRoute = require("./route/userRoute");
// fin include roues
app.use("/auth", UserRoute);

app.listen(port, () => console.log("success connect "));
