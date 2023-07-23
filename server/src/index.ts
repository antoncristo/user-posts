import express from "express";
import { config as envConfig } from "dotenv";
import { init as mySqlInit } from "./database";

const SERVER_PORT = 3300;

envConfig();

mySqlInit();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.listen(SERVER_PORT, () =>
  console.log("[Server][Connection]: listening on port", SERVER_PORT)
);
