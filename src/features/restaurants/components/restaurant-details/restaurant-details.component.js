import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import RestaurantMenu from "../restaurant-menu/restaurant-menu.component";

const RestaurantDetailsContainer = styled.View`
  flex: 1;
  width: 95%;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin: auto;
`;

export default function RestaurantDetails({ restaurant }) {
  return (
    <RestaurantDetailsContainer>
      <ScrollView>
        <RestaurantMenu restaurantMenu={restaurant.restaurantMenu} />
      </ScrollView>
    </RestaurantDetailsContainer>
  );
}
