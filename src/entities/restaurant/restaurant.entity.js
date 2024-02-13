import { restaurantKeyMappings } from "../../utils/mappings/restaurant.mapping";
import { DEFAULT_RESTAURANT_MENU } from "./restaurant.mock";
export class Restaurant {
  constructor(restaurant) {
    this.restaurantStatus = "";
    this.restaurantIcon = "";
    this.restaurantName = "";
    this.isRestaurantOpen = false;
    this.restaurantPhotos = [
      {
        height: 0,
        html_attributions: [],
        photo_reference: "",
        width: 0,
      },
    ];
    this.restaurantId = "";
    this.restaurantRating = 1;
    this.restaurantTotalRatings = 0;
    this.restaurandAddress = "";
    this.restaurantMenu = DEFAULT_RESTAURANT_MENU;
    this.restaurantGeometry = {
      location: {
        lng: 0,
        lat: 0,
      },
      viewport: {
        northeast: {
          lat: 0,
          lng: 0,
        },
        southwest: {
          lat: 0,
          lng: 0,
        },
      },
    };

    this.mapRestaurantData(restaurant);
  }

  mapRestaurantData(restaurant) {
    Object.entries(restaurant).forEach(([key, value]) => {
      const keyFormatter = restaurantKeyMappings[key];
      if (keyFormatter) {
        const formattedValue = keyFormatter(value);
        this[Object.keys(formattedValue)[0]] = Object.values(formattedValue)[0];
      }
    });
  }
}
