import { Entity } from "../interfaces/entity";
import fs from "fs";

let entities: Entity[] = [
  {
    id: 1,
    name: "entity",
    powers: { first_power: false, second_power: true },
  },
  {
    id: 2,
    name: "entity",
    powers: { first_power: false, second_power: true },
  },
];
function addEntity(entity: Entity): void {
  entities.push(entity);
  fs.writeFileSync("./entities.json", JSON.stringify(entities), {
    encoding: "utf8",
    flag: "w",
  });
}

function getSpecificEntity(_id: number): Entity {
  let content = JSON.parse(
    fs.readFileSync("./entities.json", {
      encoding: "utf8",
      flag: "r",
    })
  );

  return content.filter((e: Entity) => e.id === _id);
}

function getAllEntities(): string {
  let content = fs.readFileSync("./entities.json", {
    encoding: "utf8",
    flag: "r",
  });
  return content;
}

export { addEntity, getAllEntities, getSpecificEntity };
