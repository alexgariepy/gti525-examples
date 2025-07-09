import { Router } from "express";
import controller from "../controllers/albums.js";

const router = Router();

router.route("/")
    .get(controller.all)
    .post(controller.create);

router.route("/:albumId")
    .get(controller.albumById);

export default router;