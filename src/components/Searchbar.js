import "./Searchbar.css";
import React from "react";
import { useState } from "react";
import { searchpokemon } from "../ApiConections.js/api";
import Pokemoncard from "./Pokemoncard";

const Searchbar = () => {
  const [search, setSearch] = useState();
  const [pokemondata, setPokemondata] = useState();

  const onChangeHandler = (e) => {
    console.log("onChange:", e.target.value);
    setSearch(e.target.value);
  };

  const onClickHandler = async () => {
    console.log("procurando:", search);
    const result = await searchpokemon(search);
    setPokemondata(result);
    console.log("pokeAPI achou: ", result);
  };

  const onClickRandon = async () => {
    const randoms = Math.floor(Math.random()*898+1)
    console.log("procurando:", randoms);
    const result = await searchpokemon(randoms);
    setPokemondata(result);
    console.log("pokeAPI achou: ", result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar o pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClickHandler}>Buscar</button>
      </div>
      <div className="searchbar-btn">
        <button onClick={onClickRandon}>random</button>
      </div>
      {pokemondata ? (
        <div>
          <Pokemoncard pokemon={pokemondata} />
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
