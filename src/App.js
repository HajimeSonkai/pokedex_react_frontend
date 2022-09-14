import React, { useEffect, useState } from "react";
import { getpokemons, searchpokemon } from "./ApiConections.js/api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    console.log("Carregando");
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const fetch = await getpokemons();
      console.log(fetch);
      const promises = fetch.results.map(async (result) => {
        return await searchpokemon(result.name);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      console.log("fetch result:", results);
    } catch (error) {
      console.log("getPokemon Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;

// Baseado no codigo do video do canal pasquadev: https://www.youtube.com/watch?v=n2kkXup2T1c&t=629s&ab_channel=pasquadev
