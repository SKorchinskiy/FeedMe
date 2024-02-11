import React, { useContext, useMemo } from "react";
import RestaurantInfoCard from "../components/restaurant-info-card/restaurant-info-card.component";
import { RestaurantContext } from "../../../providers/restaurants/restaurants.provider";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import RestaurantDetails from "../components/restaurant-details/restaurant-details.component";

export default function RestaurantDetailsScreen() {
  const route = useRoute();

  const restaurantsData = useContext(RestaurantContext);

  const restaurant = useMemo(
    () =>
      restaurantsData.find(
        (restaurant) => restaurant.restaurantId === route.params.restaurantId
      ),
    [route.params.restaurantId, restaurantsData]
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantDetails restaurant={restaurant} />
    </SafeAreaView>
  );
}
