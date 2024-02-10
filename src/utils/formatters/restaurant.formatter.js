import { Restaurant } from "../../entities/restaurant/restaurant.entity";

export function formatRestaurantsData(dataToFormat) {
  const restaurants = dataToFormat.map((restaurant) =>
    !(restaurant instanceof Restaurant)
      ? new Restaurant(restaurant)
      : restaurant
  );
  return restaurants;
}
