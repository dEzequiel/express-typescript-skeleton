import { Entity } from "../interfaces/entity";
import fs from "fs"

function rewriteJSON(path: string, entities: Entity[]): void {
    fs.writeFileSync(path, JSON.stringify(entities), {
      encoding: "utf8",
      flag: "w",
    });
  }

export { rewriteJSON }