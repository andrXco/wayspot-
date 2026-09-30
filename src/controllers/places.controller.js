import { Place } from "../models/Place.js";

export const getPlaces = async (req, res) => {
    try {
        const places = await Place.findAll();

        res.json(places);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const getPlaceById = async (req, res) => {
    try {
        const place = await Place.findByPk(req.params.id);

        if (!place) {
            return res.status(404).json({
                message: "Place not found"
            });
        }

        res.json(place);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};