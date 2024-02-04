import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function RestaurantInfo({ restaurant = {} }) {
  const {
    restaurant_name,
    restaurant_icon,
    restaurant_photos,
    restaurant_address,
    restaurant_working_hours,
    restaurant_rating,
    restaurant_temporarily_closed,
  } = restaurant;

  return (
    <>
      <View style={styles.restaurantInfoContainer}>
        <View style={styles.restaurantImgContainer}>
          <Image src={restaurant_icon} style={styles.restaurantIcon} />
        </View>
        <View style={styles.restaurantDetails}>
          <Text style={styles.restaurantName}>{restaurant_name}</Text>
          <Text style={styles.restaurantAddress}>{restaurant_address}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  restaurantInfoContainer: {
    backgroundColor: "white",
    margin: 10,
    height: 250,
    borderRadius: 5,
    padding: 5,
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  restaurantImgContainer: {
    alignItems: "center",
  },
  restaurantIcon: {
    marginTop: 10,
    width: "95%",
    height: 125,
    borderRadius: 3,
    objectFit: "cover",
  },
  restaurantDetails: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  restaurantName: {
    marginTop: 25,
    fontSize: 16,
  },
  restaurantAddress: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
