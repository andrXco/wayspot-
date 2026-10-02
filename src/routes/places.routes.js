import { Router } from "express";
import {
    createPlace,
    deletePlace,
    getPlaceById,
    getPlaces,
    updatePlace
} from "../controllers/places.controller.js";

const router = Router();

router.get("/places", getPlaces);
router.get("/places/:id", getPlaceById);
router.post("/places", createPlace);
router.put("/places/:id", updatePlace);
router.delete("/places/:id", deletePlace);

export default router;
