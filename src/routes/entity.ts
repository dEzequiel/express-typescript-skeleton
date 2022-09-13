import { Router, Response, Request } from "express";
import { postEntity, getEntities, getEntity } from "../controllers/entity";
import { getSpecificEntity } from "../services/entity";

const router = Router();

/**
 * /entity [GET]
 */
router.get("/", getEntities);

/**
 * /entity/1 [GET]
 */
router.get("/:id", getEntity);

/**
 * /entity [POST]
 */
router.post("/", postEntity);

router.put("/:id", (req: Request, res: Response) => {});

router.delete("/:id", (req: Request, res: Response) => {});

export { router };
