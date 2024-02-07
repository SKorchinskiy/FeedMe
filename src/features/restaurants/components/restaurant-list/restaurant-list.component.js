import React, { useState } from "react";
import { FlatList } from "react-native";
import Searchbar from "../searchbar/searchbar.component";
import RestaurantInfoCard from "../restaurant-info-card/restaurant-info-card.component";
import {
  RestaurantDataList,
  RestaurantListContainer,
} from "./restaurant-list.styles";
import { dummyRestaurantsData } from "./mock.data";

export default function RestaurantList() {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchQueryChange = (searchInput) => setSearchQuery(searchInput);

  return (
    <RestaurantListContainer>
      <Searchbar
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
      />
      <RestaurantDataList>
        <FlatList
          data={dummyRestaurantsData.filter((restaurant) =>
            restaurant.restaurant_name.includes(searchQuery)
          )}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        />
      </RestaurantDataList>
    </RestaurantListContainer>
  );
}
