import { Entity } from "../interfaces/entity";
import fs from "fs"
import { User } from "../interfaces/user";
import { Auth } from "../interfaces/auth";

function rewriteJSON<T>(path: string, entities: T[]): void {
    fs.writeFileSync(path, JSON.stringify(entities), {
      encoding: "utf8",
      flag: "w",
    });
  }

export { rewriteJSON }