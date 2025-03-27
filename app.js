const express = require("express");
const { connectDB } = require("./src/lib/db");
const dotenv = require("dotenv");
const usersRoutes = require("./src/routes/auth.route");
const preferencesRoutes = require("./src/routes/preferences.route");
const newsRoutes = require("./src/routes/news.route");
dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/users", usersRoutes);
app.use("/users", preferencesRoutes);
app.use("", newsRoutes);

connectDB();
app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
