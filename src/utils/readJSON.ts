import fs from "fs";

function readJSON<T>(path: string): T[] {
  let content = fs.readFileSync(path, {
    encoding: "utf8",
    flag: "r",
  });
  return JSON.parse(content);
}

export { readJSON };
