import { Place } from "../models/Place.js";

const initialPlaces = [
    {
        title: "Monserrate",
        category: "Turismo",
        location: "Bogotá, Colombia",
        rating: 4.7,
        imageUrl: null,
        description: "Lugar turístico ubicado en Bogotá"
    },
    {
        title: "Ciudad Amurallada",
        category: "Turismo",
        location: "Cartagena, Colombia",
        rating: 4.8,
        imageUrl: null,
        description: "Centro histórico de Cartagena"
    },
    {
        title: "Valle del Cocora",
        category: "Naturaleza",
        location: "Quindío, Colombia",
        rating: 4.9,
        imageUrl: null,
        description: "Destino natural reconocido por sus palmas de cera"
    }
];

export async function loadInitialPlaces() {
    const count = await Place.count();

    if (count === 0) {
        await Place.bulkCreate(initialPlaces);
        console.log("Initial places created.");
    }
}