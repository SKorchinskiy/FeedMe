import { StyleSheet, View } from "react-native";
import { Searchbar as DefaultSearchBar } from "react-native-paper";

export default function Searchbar({ searchQuery, onSearchQueryChange }) {
  return (
    <View style={styles.restaurantSearch}>
      <DefaultSearchBar
        placeholder="Search for restaurants..."
        onChangeText={onSearchQueryChange}
        value={searchQuery}
        mode="view"
        style={styles.searchBar}
        inputStyle={styles.searchBarInput}
        showDivider={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantSearch: {
    flex: 0.07,
    padding: 16,
  },
  searchBar: {
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  searchBarInput: {
    minHeight: "auto",
  },
});
