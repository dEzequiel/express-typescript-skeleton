import { Entity } from "../interfaces/entity";
import fs from "fs"

function readJSON(path: string): Entity[] {
    let content = fs.readFileSync(path, {
      encoding: "utf8",
      flag: "r",
    });
    return JSON.parse(content)
  }

export { readJSON }