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
    const { email } = req.body
    registerNewUser(req.body);
    res.status(201).send(getSpecificUser(email));
  } catch (e) {
    handleHttp(res, "ERROR_REGISTERING_USER");
  }
}

function logUser(req: Request, res: Response): void {
  try {
    res.status(200).send(loggingExistingUser(req.body));
  } catch (e) {
    handleHttp(res, "ERROR_REGISTERING_USER");
  }
}

function getUsers(req: Request, res: Response): void {
  try {
    res.status(200).send(getAllUsers());
  } catch (e) {
    handleHttp(res, "ERROR_GETTING_USERS");
  }
}

export { registerUser, logUser, getUsers };
