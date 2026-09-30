import express from "express";
import usersRoutes from "./routes/users.routes.js";
import placesRoutes from "./routes/places.routes.js";

const app = express();

app.use(express.json());

app.use(usersRoutes);
app.use(placesRoutes);

export default app;