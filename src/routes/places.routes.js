import { Router } from "express";
import { getPlaces, getPlaceById } from "../controllers/places.controller.js";

const router = Router();

router.get("/places", getPlaces);
router.get("/places/:id", getPlaceById);

export default router;