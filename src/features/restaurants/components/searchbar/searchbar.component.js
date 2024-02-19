import React from "react";
import { StyleSheet } from "react-native";
import { CustomSearchBar, SearchBarContainer } from "./searchbar.styles";

export default function Searchbar({
  searchQuery,
  onSearchQueryChange,
  placeholder,
  isFavouritesBarHidden,
  toggleFavouritesBar,
}) {
  return (
    <SearchBarContainer>
      <CustomSearchBar
        placeholder={placeholder}
        placeholderTextColor="#666"
        onChangeText={onSearchQueryChange}
        value={searchQuery}
        mode="view"
        inputStyle={styles.searchBarInput}
        showDivider={false}
        icon={isFavouritesBarHidden ? "heart-outline" : "heart"}
        onIconPress={toggleFavouritesBar}
      />
    </SearchBarContainer>
  );
}

const styles = StyleSheet.create({ searchBarInput: { minHeight: "auto" } });
