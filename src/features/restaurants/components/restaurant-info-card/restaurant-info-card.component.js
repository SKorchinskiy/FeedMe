import React, { useMemo } from "react";

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

export default function RestaurantInfoCard({ restaurant = new Restaurant() }) {
  const {
    restaurantName,
    restaurantPhotos,
    restaurandAddress,
    isRestaurantOpen,
    restaurantRating,
    restaurantStatus,
    restaurantIcon,
  } = restaurant;

  const starRatingList = useMemo(
    () =>
      Array.from(
        new Array(Math.min(Math.max(1, Math.round(restaurantRating)), 5))
      ).map((_, index) => <StarRating key={index} />),
    [restaurantRating]
  );

  return (
    <RestaurantCard>
      <ImageContainer>
        <Image src={restaurantPhotos[0]} />
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
  );
}
