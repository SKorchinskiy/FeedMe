import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import RestaurantList from "../components/restaurant-list/restaurant-list.component";

export default function RestaurantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
