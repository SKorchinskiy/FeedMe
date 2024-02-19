import React, { useMemo } from "react";
import { Pressable } from "react-native";

import {
  Image,
  ImageContainer,
  RatingList,
  RestaurantAddress,
  RestaurantCard,
  RestaurantClosed,
  RestaurantDetails,
  RestaurantName,
  RestaurantOpen,
  RestaurantMetadata,
  StarRating,
  TemporarilyClosedNote,
  RowWrapper,
  RestaurantIcon,
} from "./restaurant-info-card.styles";

import Spacer, {
  directions,
  sizes,
} from "../../../../components/spacer/spacer.component";

import { Restaurant } from "../../../../entities/restaurant/restaurant.entity";
import { useNavigation } from "@react-navigation/native";
import Favourites from "../favourites/favourites.component";

export default function RestaurantInfoCard({ restaurant = new Restaurant() }) {
  const {
    restaurantName,
    restaurantPhotos,
    restaurandAddress,
    isRestaurantOpen,
    restaurantRating,
    restaurantStatus,
    restaurantIcon,
    restaurantId,
  } = restaurant;

  const navigation = useNavigation();

  const starRatingList = useMemo(
    () =>
      Array.from(
        new Array(Math.min(Math.max(1, Math.round(restaurantRating)), 5))
      ).map((_, index) => <StarRating key={index} />),
    [restaurantRating]
  );

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Restaurant Details", { restaurantId })
      }
    >
      <RestaurantCard>
        <ImageContainer>
          <Favourites restaurantId={restaurant.restaurantId} />
          <Image src={restaurantPhotos[Math.floor(Math.random() * 5)]} />
        </ImageContainer>
        <RestaurantDetails>
          <RestaurantName>{restaurantName}</RestaurantName>
          <RestaurantMetadata>
            <RatingList>{starRatingList}</RatingList>
            <RowWrapper>
              <Spacer>
                {!isRestaurantOpen &&
                restaurantStatus.toLowerCase().includes("closed") ? (
                  <TemporarilyClosedNote>
                    {restaurantStatus.split("_").join(" ")}
                  </TemporarilyClosedNote>
                ) : null}
              </Spacer>
              <Spacer direction={directions.left} size={sizes.small}>
                {isRestaurantOpen ? <RestaurantOpen /> : <RestaurantClosed />}
              </Spacer>
              <Spacer direction={directions.left} size={sizes.small}>
                <RestaurantIcon src={restaurantIcon} />
              </Spacer>
            </RowWrapper>
          </RestaurantMetadata>
          <RestaurantAddress>{restaurandAddress}</RestaurantAddress>
        </RestaurantDetails>
      </RestaurantCard>
    </Pressable>
  );
}
