import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import Searchbar from "../searchbar/searchbar.component";
import RestaurantInfoCard from "../restaurant-info-card/restaurant-info-card.component";
import {
  RestaurantDataList,
  RestaurantListContainer,
} from "./restaurant-list.styles";
import { RestaurantContext } from "../../../../providers/restaurants/restaurants.provider";
import FavouritesBar from "../favourites-bar/favourites-bar.component";

export default function RestaurantList() {
  const restaurants = useContext(RestaurantContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [isFavouritesBarHidden, setIsFavouritesBarHidden] = useState(true);

  const onSearchQueryChange = (searchInput) => setSearchQuery(searchInput);
  const toggleFavouritesBar = () =>
    setIsFavouritesBarHidden(!isFavouritesBarHidden);

  return (
    <RestaurantListContainer>
      <Searchbar
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
        placeholder={"Search for restaurants..."}
        isFavouritesBarHidden={isFavouritesBarHidden}
        toggleFavouritesBar={toggleFavouritesBar}
      />
      {!isFavouritesBarHidden && <FavouritesBar />}
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
