const express = require("express");
const app = express();
const route = require("./route.js");

app.use("/", route);

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
