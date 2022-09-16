import { Entity } from "../interfaces/entity";
import { rewriteJSON } from "../utils/rewriteJSON";
import { readJSON } from "../utils/readJSON";

let entities: Entity[] = getAllEntities();

function addEntity(entity: Entity): boolean {
  let isRegister: Entity | undefined = entities.find((e) => e.id === entity.id);

  if (isRegister === undefined) {
    entities.push(entity);
    rewriteJSON<Entity>("./entities.json", entities);
    return true;
  }

  return false;
}

function getSpecificEntity(_id: number): Entity | undefined {
  return getAllEntities().find((e) => e.id === _id);
}

function getAllEntities(): Entity[] {
  return readJSON<Entity>("./entities.json");
}

function deleteSpecificEntity(_id: number): boolean {
  let entityIndex: number = entities.findIndex((e) => e.id === _id);
  if (entityIndex > -1) {
    entities.splice(entityIndex, 1);
    rewriteJSON<Entity>("./entities.json", entities);
    return true;
  }

  return false;
}

function updateSpecificEntity(_id: number, entity: Entity): boolean {
  let isRegister: Entity | undefined = entities.find((e) => e.id === _id);

  if (isRegister != undefined) {
    isRegister.name = entity.name;
    isRegister.powers = entity.powers;
    rewriteJSON<Entity>("./entities.json", entities);
    return true;
  }

  return false;
}

export {
  addEntity,
  getAllEntities,
  getSpecificEntity,
  deleteSpecificEntity,
  updateSpecificEntity,
};
