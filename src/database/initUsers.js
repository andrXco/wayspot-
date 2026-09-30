import { User } from "../models/User.js";

const initialUsers = [
    {
        name: "Juan Pérez",
        username: "juanperez",
        email: "juan@wayspot.com",
        bio: "Me gusta conocer nuevos lugares",
        location: "Bogotá, Colombia",
        avatarUrl: null
    },
    {
        name: "María Polo",
        username: "mariapolo",
        email: "maria@wayspot.com",
        bio: "Amante de los viajes",
        location: "Medellín, Colombia",
        avatarUrl: null
    },
    {
        name: "Pedro Ramírez",
        username: "pedroramirez",
        email: "pedro@wayspot.com",
        bio: "Explorando nuevos destinos",
        location: "Cali, Colombia",
        avatarUrl: null
    }
];

export async function loadInitialUsers() {
    const count = await User.count();

    if (count === 0) {
        await User.bulkCreate(initialUsers);
        console.log("Initial users created.");
    }
}