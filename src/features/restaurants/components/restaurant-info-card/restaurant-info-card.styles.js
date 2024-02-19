import styled from "styled-components/native";
import { ClosedSign, OpenSign, StarSign } from "../../../../../assets/index";

export const RestaurantCard = styled.View`
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin: ${(props) => props.theme.space[2]};
  min-width: ${(props) => props.theme.sizes[5]};
  height: ${(props) => props.theme.sizes[5]};
  padding: ${(props) => props.theme.sizes[0]};
  border-radius: ${(props) => props.theme.sizes[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.Image`
  width: 95%;
  object-fit: cover;
  height: ${(props) => props.theme.sizes[4]};
  margin-top: ${(props) => props.theme.sizes[0]};
  border-radius: ${(props) => props.theme.sizes[0]};
`;

export const RestaurantDetails = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: ${(props) => props.theme.sizes[0]};
`;

export const RestaurantName = styled.Text`
  margin-top: ${(props) => props.theme.sizes[1]};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const RestaurantAddress = styled.Text`
  letter-spacing: 0.5px;
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantMetadata = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RatingList = styled.View`
  display: flex;
  flex-direction: row;
`;

export const StarRating = styled(StarSign)`
  width: ${({ theme }) => theme.iconSizes[2]};
  height: ${({ theme }) => theme.sizes[2]};
`;

export const RestaurantClosed = styled(ClosedSign)`
  width: ${({ theme }) => theme.iconSizes[3]};
  height: ${({ theme }) => theme.iconSizes[3]};
  transform: rotate(10deg);
`;

export const TemporarilyClosedNote = styled.Text`
  color: ${({ theme }) => theme.colors.text.error};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const RestaurantOpen = styled(OpenSign)`
  width: ${({ theme }) => theme.iconSizes[4]};
  height: ${({ theme }) => theme.iconSizes[4]};
  transform: rotate(10deg);
`;

export const RestaurantIcon = styled.Image`
  width: ${({ theme }) => theme.iconSizes[1]};
  height: ${({ theme }) => theme.iconSizes[1]};
  object-fit: contain;
`;

export const RowWrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
