import React from "react";

const FavoriteContext = React.createContext({
    favoritedPokemons: [],
    updateFavoritedPokemons: (id) => null
})

export const FavoritedProvider = FavoriteContext.Provider
export default FavoriteContext