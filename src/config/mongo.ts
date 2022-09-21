import { connect } from "mongoose";

const dotenv = require("dotenv");
dotenv.config();

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_CONN_STRING;
  await connect(DB_URI);
}

export default dbConnect;
