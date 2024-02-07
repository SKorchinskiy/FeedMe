import React from "react";
import { StyleSheet } from "react-native";
import { CustomSearchBar, SearchBarContainer } from "./searchbar.styles";

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
