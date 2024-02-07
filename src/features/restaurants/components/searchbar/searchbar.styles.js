import styled from "styled-components/native";
import { Searchbar as DefaultSearchBar } from "react-native-paper";

export const SearchBarContainer = styled.View`
  display: flex;
  flex: 0.07;
  padding: ${(props) => props.theme.space[3]};
`;

export const CustomSearchBar = styled(DefaultSearchBar)`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.35);
  height: ${(props) => props.theme.sizes[3]};
  border-radius: ${(props) => props.theme.sizes[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
