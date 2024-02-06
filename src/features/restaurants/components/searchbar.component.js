import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Searchbar as DefaultSearchBar } from "react-native-paper";

const SearchBarContainer = styled.View`
  display: flex;
  flex: 0.07;
  padding: ${(props) => props.theme.space[3]};
`;

const CustomSearchBar = styled(DefaultSearchBar)`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.35);
  height: ${(props) => props.theme.sizes[3]};
  border-radius: ${(props) => props.theme.sizes[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export default function Searchbar({ searchQuery, onSearchQueryChange }) {
  return (
    <SearchBarContainer>
      <CustomSearchBar
        placeholder="Search for restaurants..."
        onChangeText={onSearchQueryChange}
        value={searchQuery}
        mode="view"
        inputStyle={styles.searchBarInput}
        showDivider={false}
      />
    </SearchBarContainer>
  );
}

const styles = StyleSheet.create({ searchBarInput: { minHeight: "auto" } });
