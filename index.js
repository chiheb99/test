const express = require("express");
const app = express();
app.use(express.json());
app.use("/", (req, res) => {
  res.send("hi here");
});
app.listen(8080, () => {
  console.log("server is running");
});
