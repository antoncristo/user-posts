import express from "express";
import { config as envConfig } from "dotenv";
import cors from "cors";

import { init as mySqlInit } from "./database";
import { appRouter } from "./api";

const SERVER_PORT = 3300;

envConfig();

mySqlInit();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", appRouter);

app.listen(SERVER_PORT, () =>
  console.log("[Server][Connection]: listening on port", SERVER_PORT)
);
