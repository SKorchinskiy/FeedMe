import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailsScreen from "../../features/restaurants/screens/restaurant-details.screen";

const ScreenStack = createNativeStackNavigator();

export default function RestaurantsNavigator() {
  return (
    <ScreenStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Restaurants List"
    >
      <ScreenStack.Screen
        name="Restaurants List"
        component={RestaurantsScreen}
      />
      <ScreenStack.Screen
        name="Restaurant Details"
        component={RestaurantDetailsScreen}
        options={{ gestureDirection: "vertical" }}
      />
    </ScreenStack.Navigator>
  );
}
