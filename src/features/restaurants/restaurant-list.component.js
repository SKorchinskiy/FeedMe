import React, { useState } from "react";
import { FlatList } from "react-native";
import Searchbar from "./components/searchbar.component";
import RestaurantInfoCard from "./components/restaurant-info-card.component";
import styled from "styled-components";

const dummyRestaurantsData = [
  {
    restaurant_name: "Là Appetit",
    restaurant_icon:
      "https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png",
    restaurant_photos: [
      "https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png",
    ],
    restaurant_address: "165 Polk Street, San Francisco",
    restaurant_working_hours: {
      opening: "08:00",
      closing: "20:00",
    },
    restaurant_rating: 5,
    restaurant_temporarily_closed: false,
  },
  {
    restaurant_name: "Zuni Café",
    restaurant_icon:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    restaurant_photos: [
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    ],
    restaurant_address: "1658 Markte Street, San Francisco",
    restaurant_working_hours: {
      opening: "08:00",
      closing: "20:00",
    },
    restaurant_rating: 5,
    restaurant_temporarily_closed: false,
  },
];

const RestaurantListContainer = styled.View`
  display: flex;
  flex: 1;
`;

const RestaurantDataList = styled.View`
  display: flex;
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

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
