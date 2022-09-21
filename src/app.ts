import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
import dbConnect from "./config/mongo";

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

dbConnect().then(() => {
  console.log("MongoDB connection...ready");
});

app.listen(PORT, () => {
  console.log(`Listening in port...${PORT}`);
});
