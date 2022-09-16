import { HttpCode } from "./../exceptions/HttpCode";
import { AppError, AppErrorArgs } from "./../exceptions/AppError";
import { Request, Response } from "express";
import {
  getAllUsers,
  getSpecificUser,
  loggingExistingUser,
  registerNewUser,
} from "../services/auth";
import { handleHttp } from "../utils/error.handle";

function registerUser(req: Request, res: Response): void {
  try {
    const { email } = req.body;
    if (!registerNewUser(req.body)) {
      throw new AppError({
        httpCode: HttpCode.BAD_REQUEST,
        description: "Email is already registered",
      });
    } else {
      res.status(HttpCode.OK).send({ status: "OK", data: getSpecificUser(email) });
    }
  } catch (error: unknown) {
    if (error instanceof AppError) {
      res.status(error.httpCode).send({ error });
    }
  }
}

function logUser(req: Request, res: Response): void {
  try {
    const { email } = req.body;
    if (!loggingExistingUser(req.body)) {
      throw new AppError({
        httpCode: HttpCode.BAD_REQUEST,
        description: "Email or password are incorrect",
      });
    } else {
      res.status(HttpCode.OK).send(getSpecificUser(email));
    }
  } catch (error: unknown) {
    if (error instanceof AppError) {
      res.status(error.httpCode).send({ error });
    }
  }
}

function getUsers(req: Request, res: Response): void {
  try {
    res.status(HttpCode.OK).send(getAllUsers());
  } catch (e) {
    handleHttp(res, "ERROR_GETTING_USERS");
  }
}

export { registerUser, logUser, getUsers };
