import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DEFAULT_CONTEXT = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
};

export const FavouritesContext = createContext(DEFAULT_CONTEXT);

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const retrieveFavourites = async () => {
      const persistedFavourites = await AsyncStorage.getItem("favourites");
      if (persistedFavourites) {
        const parsedFavourites = JSON.parse(persistedFavourites);
        setFavourites(parsedFavourites);
      }
    };

    retrieveFavourites();
  }, []);

  useEffect(() => {
    const persistFavourites = async (favourites) => {
      AsyncStorage.setItem("favourites", JSON.stringify(favourites));
    };

    persistFavourites(favourites);
  }, [favourites]);

  const addToFavourites = (restaurantId) => {
    const newFavourites = [...favourites, restaurantId];
    setFavourites(newFavourites);
  };

  const removeFromFavourites = (restaurantId) => {
    const newFavourites = favourites.filter((id) => id !== restaurantId);
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
