import { HttpCode } from "./../exceptions/HttpCode";
import { AppError } from "./../exceptions/AppError";
import { Request, Response } from "express";
import {
  getAllUsers,
  getSpecificUser,
  loggingExistingUser,
  registerNewUser,
} from "../services/auth";
import { handleHttp } from "../utils/error.handle";
import { ErrorHandler } from "../exceptions/ErrorHandler";

function registerUser(req: Request, res: Response): void {
  try {
    const { email } = req.body;
    if (!registerNewUser(req.body)) {
      throw new AppError({
        httpCode: HttpCode.BAD_REQUEST,
        description: "EMAIL IS ALREADY REGISTERED",
      });
    } else {
      res
        .status(HttpCode.OK)
        .send({ status: "OK", data: getSpecificUser(email) });
    }
  } catch (error: unknown) {
    if (!ErrorHandler.isTrustedError(error)) {
      ErrorHandler.handleUntrustedError(error);
    } else {
      ErrorHandler.handleTrustedError(error, res);
    }
  }
}

function logUser(req: Request, res: Response): void {
  try {
    const { email, password } = req.body;
    if (!loggingExistingUser({ email, password })) {
      throw new AppError({
        httpCode: HttpCode.BAD_REQUEST,
        description: "EMAIL OR PASSWORD ARE INCORRECT",
      });
    } else {
      res.status(HttpCode.OK).send(getSpecificUser(email));
    }
  } catch (error: unknown) {
    if (!ErrorHandler.isTrustedError(error)) {
      ErrorHandler.handleUntrustedError(error);
    } else {
      ErrorHandler.handleTrustedError(error, res);
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
