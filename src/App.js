import React, { useEffect, useState } from "react";
import { getpokemons, searchpokemon } from "./ApiConections.js/api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { FavoritedProvider } from "./contexts/favoritContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const itensperpage = 18;

  useEffect(() => {
    console.log("Carregando");
    fetchApi(itensperpage, page);
  }, [page]);

  const fetchApi = async (itensperpage, page) => {
    try {
      const fetch = await getpokemons(itensperpage, itensperpage * page);
      console.log(fetch);
      const promises = fetch.results.map(async (result) => {
        return await searchpokemon(result.name);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(fetch.count / itensperpage));
      console.log("fetch result:", results);
    } catch (error) {
      console.log("getPokemon Error:", error);
    }
  };

  const updateFavoritedPokemons = (name) => {
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updateFavorites.splice(favoriteIndex, 1)
    } else { updateFavorites.push(name) }
    setFavorites(updateFavorites)
  }

  return (
    <FavoritedProvider
      value={{
        favoritedPokemons: favorites,
        updateFavoritedPokemons: updateFavoritedPokemons,
      }}
    >
      <div>
        <Navbar />
        <Searchbar />
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </FavoritedProvider>
  );
}

export default App;

// Baseado no codigo do video do canal pasquadev: https://www.youtube.com/watch?v=n2kkXup2T1c&t=629s&ab_channel=pasquadev
