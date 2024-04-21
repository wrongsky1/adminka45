const express = require("express");

const path = require("path");

const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");

const PORT = 3000;
const app = express();

app.use(
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Приложение запущено тут: http://localhost:${PORT}`);
});
