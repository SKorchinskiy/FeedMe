import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { FavouritesContext } from "../../../../providers/favourites/favourites.provider";
import { RestaurantContext } from "../../../../providers/restaurants/restaurants.provider";
import RestaurantInfoCard from "../restaurant-info-card/restaurant-info-card.component";
import { FavouritesBarContainer } from "./favourite-bar.styles";

export default function FavouritesBar() {
  const restaurants = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);

  const favouriteRestaurants = restaurants.filter((restaurant) =>
    Boolean(favourites.find((id) => id === restaurant.restaurantId))
  );

  if (!favourites.length) return null;

  return (
    <FavouritesBarContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {favouriteRestaurants.map((restaurant) => (
          <RestaurantInfoCard
            key={restaurant.restaurantId}
            restaurant={restaurant}
          />
        ))}
      </ScrollView>
    </FavouritesBarContainer>
  );
}
