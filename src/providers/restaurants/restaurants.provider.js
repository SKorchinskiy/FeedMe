import React, { createContext, useContext, useEffect, useState } from "react";
import { getRestaurantsData } from "../../services/restaurants.service";
import { LocationContext } from "../location/location.provider";

export const RestaurantContext = createContext([]);

export function RestaurantsProvider({ children }) {
  const { currentLocation } = useContext(LocationContext);

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurantsData = async ({ location }) => {
      const restaurantData = await getRestaurantsData({ location });
      setRestaurants(restaurantData);
    };
    fetchRestaurantsData(currentLocation);
  }, [currentLocation]);

  return (
    <RestaurantContext.Provider value={restaurants}>
      {children}
    </RestaurantContext.Provider>
  );
}
