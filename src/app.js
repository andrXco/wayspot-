import express from "express";
import usersRoutes from "./routes/users.routes.js";
import placesRoutes from "./routes/places.routes.js";
import reviewsRoutes from "./routes/reviews.routes.js";

const app = express();

app.use(express.json());

app.use(usersRoutes);
app.use(placesRoutes);
app.use(reviewsRoutes);

export default app;
