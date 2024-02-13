import React, { createContext, useState } from "react";
import { cityLocation } from "../../utils/mocks";

const DEFAULT_LOCATION = {
  location: { lat: 37.7749295, lng: -122.4194155 },
};

export const LocationContext = createContext(DEFAULT_LOCATION);

export function LocationProvider({ children }) {
  const [currentLocation, setCurrentLocation] = useState(DEFAULT_LOCATION);

  const locationChangeHandler = (newLocation) => {
    const coordinates =
      cityLocation[newLocation.toLowerCase()] || currentLocation.location;
    setCurrentLocation({
      location: {
        ...coordinates,
      },
    });
  };

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        locationChangeHandler,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
