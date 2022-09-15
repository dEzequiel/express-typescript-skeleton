import { Entity } from "../interfaces/entity";
import { rewriteJSON } from "../utils/rewriteJSON";
import { readJSON } from "../utils/readJSON";

let entities: Entity[] = getAllEntities();

function addEntity(entity: Entity): void {
  entities.push(entity);
  rewriteJSON("./entities.json", entities);
}

function getSpecificEntity(_id: number): Entity {
  return getAllEntities()[entities.findIndex((e) => e.id === _id)];
}

function getAllEntities(): Entity[] {
  return readJSON("./entities.json");
}

function deleteSpecificEntity(_id: number): void {
  let entityIndex: number = entities.findIndex((e) => e.id === _id);
  if (entityIndex > -1) {
    entities.splice(entityIndex, 1);
    rewriteJSON("./entities.json", entities);
  }
}

function updateSpecificEntity(_id: number, entity: Entity): void {
  let entityIndex: number = entities.findIndex((e) => e.id === _id);
  if (entityIndex > -1) {
    entities[entityIndex] = entity;
  }
  rewriteJSON("./entities.json", entities);
}

export { addEntity, getAllEntities, getSpecificEntity, deleteSpecificEntity, updateSpecificEntity };
