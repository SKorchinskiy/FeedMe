import React from "react";

import {
  useFonts as useOswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";
import { ThemeProvider } from "styled-components";

import { LocationProvider } from "./src/providers/location/location.provider";
import { RestaurantsProvider } from "./src/providers/restaurants/restaurants.provider";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  const [oswaldLoaded] = useOswaldFonts({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLatoFonts({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <LocationProvider>
      <RestaurantsProvider>
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
        </ThemeProvider>
      </RestaurantsProvider>
    </LocationProvider>
  );
}
