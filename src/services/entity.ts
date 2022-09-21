import { Entity } from "../interfaces/entity";
import EntityModel from "../models/entity.model";

async function addEntity(entity: Entity): Promise<boolean> {
  let isRegister = await EntityModel.findOne(entity);

  if (!isRegister) {
    await EntityModel.create(entity);
    return true;
  }
  return false;
}
async function getSpecificEntity(id: string): Promise<Entity | null> {
  const entity = await EntityModel.findOne({ _id: id });
  return entity;
}

async function getAllEntities() {
  const entities = await EntityModel.find({});
  return entities;
}

async function deleteSpecificEntity(_id: number): Promise<boolean | null> {
  return await EntityModel.findByIdAndRemove(_id);
}

async function updateSpecificEntity(_id: number, entity: Entity): Promise<boolean | null> {
  return await EntityModel.findByIdAndUpdate(_id, entity);
}

export {
  addEntity,
  getAllEntities,
  getSpecificEntity,
  deleteSpecificEntity,
  updateSpecificEntity,
};
