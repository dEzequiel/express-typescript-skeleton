import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  addEntity,
  getAllEntities,
  getSpecificEntity,
  deleteSpecificEntity,
  updateSpecificEntity,
} from "../services/entity";
import { AppError } from "../exceptions/AppError";
import { HttpCode } from "../exceptions/HttpCode";
import { ErrorHandler } from "../exceptions/ErrorHandler";

function postEntity(req: Request, res: Response): void {
  try {
    const { id } = req.body;
    if (!addEntity(req.body)) {
      throw new AppError({
        httpCode: HttpCode.BAD_REQUEST,
        description: "Entity is already registered",
      });
    } else {
      res.status(HttpCode.OK).send(getSpecificEntity(id));
    }
  } catch (error: unknown) {
    if (!ErrorHandler.isTrustedError(error)) {
      ErrorHandler.handleUntrustedError(error);
    } else {
      ErrorHandler.handleTrustedError(error, res);
    }
  }
}

async function getEntities(req: Request, res: Response): Promise<void> {
  try {
    const response = await getAllEntities();
    res.status(200).send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ENTITY");
  }
}

async function getEntity(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const response = await getSpecificEntity(id);
    if (!response) {
      throw new AppError({
        httpCode: HttpCode.NOT_FOUND,
        description: `Entity with ID=${id} not found`,
      });
    } else {
      res.status(HttpCode.OK).send(response);
    }
  } catch (error: unknown) {
    if (!ErrorHandler.isTrustedError(error)) {
      ErrorHandler.handleUntrustedError(error);
    } else {
      ErrorHandler.handleTrustedError(error, res);
    }
  }
}

function deleteEntity(req: Request, res: Response): void {
  try {
    const id = req.params.id;
    if (!deleteSpecificEntity(Number(id))) {
      throw new AppError({
        httpCode: HttpCode.NOT_FOUND,
        description: `Entity with ID=${id} not found`,
      });
    } else {
      res.status(HttpCode.OK).send(`Entity with ID=${id} deleted sucesfully`);
    }
  } catch (error: unknown) {
    if (!ErrorHandler.isTrustedError(error)) {
      ErrorHandler.handleUntrustedError(error);
    } else {
      ErrorHandler.handleTrustedError(error, res);
    }
  }
}

function updateEntity(req: Request, res: Response): void {
  try {
    const id = req.params.id;
    if (!updateSpecificEntity(Number(id), req.body)) {
      throw new AppError({
        httpCode: HttpCode.NOT_FOUND,
        description: `Entity with ID=${id} not found`,
      });
    } else {
      res.status(HttpCode.OK).send(`Entity with ID=${id} updated sucesfully`);
    }
  } catch (error: unknown) {
    if (!ErrorHandler.isTrustedError(error)) {
      ErrorHandler.handleUntrustedError(error);
    } else {
      ErrorHandler.handleTrustedError(error, res);
    }
  }
}

export { postEntity, getEntities, getEntity, deleteEntity, updateEntity };
