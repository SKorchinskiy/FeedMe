import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import Searchbar from "../../restaurants/components/searchbar/searchbar.component";
import styled from "styled-components";
import { RestaurantContext } from "../../../providers/restaurants/restaurants.provider";
import { LocationContext } from "../../../providers/location/location.provider";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card/restaurant-info-card.component";

const MapSearchbarContainer = styled.View`
  top: 35px;
  width: 100%;
  z-index: 10;
  position: absolute;
`;

export default function MapScreen({ navigation }) {
  const { currentLocation, locationChangeHandler } =
    useContext(LocationContext);
  const restaurantsData = useContext(RestaurantContext);
  const [targetCity, setTargetCity] = useState("San Francisco");

  const handleTargetCityChange = (value) => setTargetCity(value);

  useEffect(() => {
    locationChangeHandler(targetCity);
    console.log({ restaurantsData });
  }, [targetCity]);

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <MapSearchbarContainer>
        <Searchbar
          searchQuery={targetCity}
          onSearchQueryChange={handleTargetCityChange}
          placeholder={targetCity}
        />
      </MapSearchbarContainer>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: currentLocation.lat,
          longitude: currentLocation.lng,
        }}
      >
        {currentLocation &&
          restaurantsData.map((restaurant, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: restaurant.restaurantGeometry.location.lat,
                  longitude: restaurant.restaurantGeometry.location.lng,
                }}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate("Restaurant Details", {
                      restaurantId: restaurant.restaurantId,
                    })
                  }
                >
                  <RestaurantInfoCard restaurant={restaurant} />
                </Callout>
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
}
