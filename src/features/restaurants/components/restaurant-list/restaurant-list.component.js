import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import Searchbar from "../searchbar/searchbar.component";
import RestaurantInfoCard from "../restaurant-info-card/restaurant-info-card.component";
import {
  RestaurantDataList,
  RestaurantListContainer,
} from "./restaurant-list.styles";
import { RestaurantContext } from "../../../../providers/restaurants/restaurants.provider";

export default function RestaurantList() {
  const [searchQuery, setSearchQuery] = useState("");
  const restaurants = useContext(RestaurantContext);

  const onSearchQueryChange = (searchInput) => setSearchQuery(searchInput);

  return (
    <RestaurantListContainer>
      <Searchbar
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
      />
      <RestaurantDataList>
        <FlatList
          data={restaurants.filter((restaurant) =>
            restaurant.restaurantName
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        />
      </RestaurantDataList>
    </RestaurantListContainer>
  );
}
