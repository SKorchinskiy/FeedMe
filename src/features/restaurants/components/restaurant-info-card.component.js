import React from "react";
import styled from "styled-components/native";

const RestaurantCard = styled.View`
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin: ${(props) => props.theme.space[2]};
  height: ${(props) => props.theme.sizes[5]};
  padding: ${(props) => props.theme.sizes[0]};
  border-radius: ${(props) => props.theme.sizes[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.Image`
  width: 95%;
  object-fit: cover;
  height: ${(props) => props.theme.sizes[4]};
  margin-top: ${(props) => props.theme.sizes[0]};
  border-radius: ${(props) => props.theme.sizes[0]};
`;

const RestaurantDetails = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: ${(props) => props.theme.sizes[0]};
`;

const RestaurantName = styled.Text`
  margin-top: ${(props) => props.theme.sizes[1]};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const RestaurantAddress = styled.Text`
  letter-spacing: 0.5px;
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.body};
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    restaurant_name,
    restaurant_icon,
    // restaurant_photos,
    restaurant_address,
    // restaurant_working_hours,
    // restaurant_rating,
    // restaurant_temporarily_closed,
  } = restaurant;

  return (
    <>
      <RestaurantCard>
        <ImageContainer>
          <Image src={restaurant_icon} />
        </ImageContainer>
        <RestaurantDetails>
          <RestaurantName>{restaurant_name}</RestaurantName>
          <RestaurantAddress>{restaurant_address}</RestaurantAddress>
        </RestaurantDetails>
      </RestaurantCard>
    </>
  );
}
