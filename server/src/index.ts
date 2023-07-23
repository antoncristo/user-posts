import express from "express";
import { config as envConfig } from "dotenv";

const SERVER_PORT = 3300;

envConfig();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.listen(SERVER_PORT, () =>
  console.log("[Server][Connection]: listening on port", SERVER_PORT)
);
