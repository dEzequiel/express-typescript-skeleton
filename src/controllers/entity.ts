import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  addEntity,
  getAllEntities,
  getSpecificEntity,
  deleteSpecificEntity,
  updateSpecificEntity,
} from "../services/entity";

function postEntity(req: Request, res: Response): void {
  try {
    addEntity(req.body);
    res.status(201).send(req.body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ENTITY");
  }
}

function getEntities(req: Request, res: Response): void {
  try {
    res.status(200).send(getAllEntities());
  } catch (e) {
    handleHttp(res, "ERROR_GET_ENTITY");
  }
}

function getEntity(req: Request, res: Response): void {
  try {
    const id = req.params.id;
    res.status(200).send(getSpecificEntity(Number(id)));
  } catch (e) {
    handleHttp(res, "ERROR_GET_SPECIFIC_ENTITY");
  }
}

function deleteEntity(req: Request, res: Response): void {
  try {
    const id = req.params.id;
    deleteSpecificEntity(Number(id))
    res.status(200).send(`Entity with ID=${id} deleted sucesfully`);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ENTITY");
  }
}

function updateEntity(req: Request, res: Response): void {
  try {
    const id = req.params.id;
    updateSpecificEntity(Number(id), req.body)
    res.status(200).send(`Entity with ID=${id} updated sucesfully`);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ENTITY");
  }
}

export { postEntity, getEntities, getEntity, deleteEntity, updateEntity };
