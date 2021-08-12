const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build"))); //reroutes if users go to the backend homepage

app.use("/api/*", (_, res) => {
  res.json({ data: "the API is working" });
});
app.use("*", (__, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
}); //handles incorrect endpoints
app.listen(port, () => {
  console.log(`the server is running on port: ${port}`);
});

console.log("it's alive");
console.log(__dirname);
console.log(__filename);
console.log(process.env.USER);
console.log(process.env.PORT);
console.log(process.env.GREET);
console.log(process.env.FOOD);
