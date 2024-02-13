import React from "react";
import { StyleSheet } from "react-native";
import { CustomSearchBar, SearchBarContainer } from "./searchbar.styles";

export default function Searchbar({
  searchQuery,
  onSearchQueryChange,
  placeholder,
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
      />
    </SearchBarContainer>
  );
}

const styles = StyleSheet.create({ searchBarInput: { minHeight: "auto" } });
