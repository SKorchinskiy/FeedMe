import React, { useMemo } from "react";
import {
  Image,
  ImageContainer,
  RatingList,
  RestaurantAddress,
  RestaurantCard,
  RestaurantClosed,
  RestaurantDetails,
  RestaurantMealSign,
  RestaurantName,
  RestaurantOpen,
  RestaurantMetadata,
  StarRating,
  TemporarilyClosedNote,
  RowWrapper,
} from "./restaurant-info-card.styles";
import Spacer, {
  directions,
  sizes,
} from "../../../../components/spacer/spacer.component";

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    restaurant_name,
    restaurant_icon,
    restaurant_photos,
    restaurant_address,
    isOpen,
    restaurant_rating,
    isTemporarilyClosed,
  } = restaurant;

  const starRatingList = useMemo(
    () =>
      Array.from(new Array(Math.max(1, Math.round(restaurant_rating)))).map(
        (_, index) => <StarRating key={index} />
      ),
    [restaurant_rating]
  );

  return (
    <RestaurantCard>
      <ImageContainer>
        <Image src={restaurant_icon} />
      </ImageContainer>
      <RestaurantDetails>
        <RestaurantName>{restaurant_name}</RestaurantName>
        <RestaurantMetadata>
          <RatingList>{starRatingList}</RatingList>
          <RowWrapper>
            <Spacer>
              {isTemporarilyClosed ? (
                <TemporarilyClosedNote>
                  CLOSED TEMPORARILY
                </TemporarilyClosedNote>
              ) : null}
            </Spacer>
            <Spacer direction={directions.left} size={sizes.medium}>
              {isOpen ? <RestaurantOpen /> : <RestaurantClosed />}
            </Spacer>
            <Spacer direction={directions.left} size={sizes.medium}>
              <RestaurantMealSign />
            </Spacer>
          </RowWrapper>
        </RestaurantMetadata>
        <RestaurantAddress>{restaurant_address}</RestaurantAddress>
      </RestaurantDetails>
    </RestaurantCard>
  );
}
