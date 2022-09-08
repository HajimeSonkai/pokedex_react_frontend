import React from "react";
import "./Pokedex.css";
import Pokemoncard from "./Pokemoncard";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  console.log("pokemons carregados:", pokemons)
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>paginação</div>
      </div>
      {loading ? (
        <div>carregando agora </div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                  <Pokemoncard key={index} pokemon={pokemon} />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
