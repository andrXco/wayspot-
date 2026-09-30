import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "wayspot",
    "postgres",
    "Simon1213",
    {
        host: "localhost",
        port: 5432,
        dialect: "postgres"
    }
);