import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

// Extiende a la interfaz Request para poder a;adir un parametro nuevo a tu gusto. Un detalle.
interface RequestExt extends Request {
  user?: string | JwtPayload;
}

export { RequestExt };
