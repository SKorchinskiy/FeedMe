import React, { createContext, useState, useEffect } from "react";

const DEFAULT_LOCATION = {
  location: { lat: 37.7749295, lng: -122.4194155 },
};

export const LocationContext = createContext(DEFAULT_LOCATION);

export function LocationProvider({ children }) {
  const [currentLocation, setCurrentLocation] = useState(DEFAULT_LOCATION);

  useEffect(() => {
    const getCurrentLocation = async () => {};

    getCurrentLocation();
  }, []);

  return (
    <LocationContext.Provider value={currentLocation}>
      {children}
    </LocationContext.Provider>
  );
}
