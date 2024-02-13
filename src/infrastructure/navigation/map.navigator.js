import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MapScreen from "../../features/map/screens/map.screen";

const ScreenStack = createNativeStackNavigator();

export default function MapNavigator() {
  return (
    <ScreenStack.Navigator
      initialRouteName="Map"
      screenOptions={{ headerShown: false }}
    >
      <ScreenStack.Screen name="Map" component={MapScreen} />
    </ScreenStack.Navigator>
  );
}
