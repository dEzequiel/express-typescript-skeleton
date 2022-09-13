import { Router, Response, Request } from "express";

const router = Router();

/**
 * /entity [GET]
 */
router.get("/", (req: Request, res: Response) => {
  res.send({ data: "ENTITY_MODEL" });
});

/**
* /entity/1 [GET]
*/
router.get("/:id", (req: Request, res: Response) => {
    res.send('entity ' + req.params.id)
})

/**
* /entity [POST]
*/
router.post("/", (req: Request, res: Response) => {

})

router.put("/:id", (req: Request, res: Response) => {

})

router.delete("/:id", (req: Request, res: Response) => {

})

export { router };
