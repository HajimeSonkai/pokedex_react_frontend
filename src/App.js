import React, { useEffect, useState } from "react";
import { getpokemons } from "./ApiConections.js/api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const fetchApi = async () => {
    try {
      setLoading(true)
      const result = await getpokemons()
      setPokemons(result)
      setLoading(false)
      console.log("fetch result:", result)
    } catch (error) {
      console.log("getPokemon Error:", error)
    }
  }

  useEffect(() => {
    console.log("Carregando")
    fetchApi();
  }, []);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons.results} loading={loading} />
    </div>
  );
}

export default App;

// Baseado no codigo do video do canal pasquadev: https://www.youtube.com/watch?v=n2kkXup2T1c&t=629s&ab_channel=pasquadev
