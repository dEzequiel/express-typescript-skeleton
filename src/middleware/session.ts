import { AppError } from "./../exceptions/AppError";
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handler";
import { HttpCode } from "../exceptions/HttpCode";
import { RequestExt } from "../interfaces/RequestExt";

// EL JWT se encuentra dentro del encabezado al hacer la request
function checkSession(req: RequestExt, res: Response, next: NextFunction) {
  try {
    /**
        1. Dentro de los headers de la request(informacion) hay un apartado que es
        'authorization', hay dentro se encuentra el jwa token. */
    const JWT_USER = req.headers.authorization || null;
    const token = JWT_USER?.split(" ").pop();
    if (!verifyToken(`${token}`)) {
      throw new AppError({
        httpCode: HttpCode.BAD_REQUEST,
        description: "SESSION INVALID",
      });
    } else {
      req.user = verifyToken(`${token}`);
      next();
    }
  } catch (error: unknown) {
    console.log(error);
    res.status(HttpCode.UNAUTHORIZED).send(error);
  }
}

export { checkSession };
