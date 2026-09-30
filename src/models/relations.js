import { User } from "./User.js";
import { Place } from "./Place.js";
import { Review } from "./Review.js";

export function setupRelations() {

    User.hasMany(Review, {
        foreignKey: "userId",
        as: "reviews",
        onDelete: "CASCADE",
        hooks: true
    });

    Review.belongsTo(User, {
        foreignKey: "userId",
        as: "user"
    });

    Place.hasMany(Review, {
        foreignKey: "placeId",
        as: "reviews",
        onDelete: "CASCADE",
        hooks: true
    });

    Review.belongsTo(Place, {
        foreignKey: "placeId",
        as: "place"
    });
}