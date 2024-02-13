export const restaurantKeyMappings = {
  business_status: (value) => ({ restaurantStatus: value }),
  icon: (value) => ({ restaurantIcon: value }),
  name: (value) => ({ restaurantName: value }),
  geometry: (value) => ({ restaurantGeometry: value }),
  viewport: (value) => ({ restaurantViewPort: value }),
  opening_hours: ({ open_now: value }) => ({ isRestaurantOpen: value }),
  photos: (value) => ({ restaurantPhotos: value }),
  place_id: (value) => ({ restaurantId: value }),
  rating: (value) => ({ restaurantRating: value }),
  user_ratings_total: (value) => ({ restaurantTotalRatings: value }),
  vicinity: (value) => ({ restaurandAddress: value }),
};
