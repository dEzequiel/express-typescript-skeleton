import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  addEntity,
  getAllEntities,
  getSpecificEntity,
} from "../services/entity";

function postEntity(req: Request, res: Response): void {
  try {
    addEntity(req.body);
    res.send(req.body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ENTITY");
  }
}

function getEntities(req: Request, res: Response): void {
  try {
    res.send(getAllEntities());
  } catch (e) {
    handleHttp(res, "ERROR_GET_ENTITY");
  }
}

function getEntity({ params, body }: Request, res: Response): void {
  try {
    const { id } = params;
    res.send(getSpecificEntity(id, body));
  } catch (e) {
    handleHttp(res, "ERROR_GET_SPECIFIC_ENTITY");
  }
}

export { postEntity, getEntities, getEntity };
