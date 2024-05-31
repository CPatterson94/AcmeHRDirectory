const express = require("express");
const app = express();
const baseQuery = "/api";
const path = require("path");

app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/index.html")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.use(baseQuery + "/employees", require("./employees"));
app.use(baseQuery + "/departments", require("./departments"));

app.listen(8080, () => {
  console.log("App is running at port 8080");
});
