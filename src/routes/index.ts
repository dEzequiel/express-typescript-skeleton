import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

function cleanFileName(fileName: string): string {
  const file = fileName.split(".").shift();
  return file!; // Value typed as optional cannot be null or undefined
}

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName); //A cada archivo le quitamos .*
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((routerFile) => {
      console.log(`Loading route... /${cleanName}`);
      router.use(`/${cleanName}`, routerFile.router);
    });
  }
});

export { router };
