import { Router, Response, Request } from "express";
import {
  postEntity,
  getEntities,
  getEntity,
  deleteEntity,
  updateEntity,
} from "../controllers/entity";

const router = Router();

// app.get("/orders", ...);         // handle order queries   (use req.query)
// app.post("/orders", ...);        // create new order       (use req.body)
// app.put("/orders/:id", ...);     // modify existing order  (use req.params.id and req.body)
// app.delete("/orders/:id", ...);  // delete existing order  (use req.params.id)

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

/**
 * /entity/3 [PUT]
 */
router.put("/:id", updateEntity);

/**
 * /entity/4 [DELETE]
 */
router.delete("/:id", deleteEntity);

export { router };
