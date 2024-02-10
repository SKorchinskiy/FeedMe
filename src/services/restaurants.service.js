import * as mockData from "../utils/mocks/index";

import { formatRestaurantsData } from "../utils/formatters/restaurant.formatter";

export async function getRestaurantsData({
  location = { lat: 37.7749295, lng: -122.4194155 },
}) {
  const stringifiedLocation = `${location.lat},${location.lng}`;

  const response = await Promise.resolve({
    json: () =>
      Promise.resolve([
        ...mockData.mocks[stringifiedLocation].results.map((restaurant) => ({
          ...restaurant,
          photos: [...mockData.mockImages],
        })),
      ]),
  });

  const restaurantsData = await response.json();

  return formatRestaurantsData(restaurantsData);
}
