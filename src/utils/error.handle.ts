import { Response } from "express";
import { HttpCode } from "../exceptions/HttpCode";

const handleHttp = (res: Response, error: string) => {
  res.status(HttpCode.INTERNAL_SERVER_ERROR);
  res.send({ error });
};

export { handleHttp };
