import "./Searchbar.css";
import React from "react";
import { useState } from "react";
import { searchpokemon } from "../ApiConections.js/api";

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

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar o pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClickHandler}>Buscar</button>
      </div>
      {pokemondata ? (
        <div>
          <div>nome: {pokemondata.name}</div>
          <div>numero: {pokemondata.id}</div>
          <div>peso: {pokemondata.weight}</div>
          <img src={pokemondata.sprites.front_default} alt={pokemondata.name} />
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
