import React, { useContext, useMemo } from "react";
import AntIcon from "react-native-vector-icons/AntDesign";
import { FavouritesContext } from "../../../../providers/favourites/favourites.provider";

export default function Favourites({ restaurantId }) {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = useMemo(
    () => Boolean(favourites.find((id) => id === restaurantId)),
    [restaurantId, favourites]
  );

  return (
    <AntIcon
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurantId)
          : removeFromFavourites(restaurantId)
      }
      name={isFavourite ? "heart" : "hearto"}
      color={isFavourite ? "red" : "white"}
      size={30}
      style={{
        position: "absolute",
        zIndex: 10,
        right: 20,
        top: 20,
      }}
    />
  );
}
