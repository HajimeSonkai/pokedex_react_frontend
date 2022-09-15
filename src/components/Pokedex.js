import React from "react";
import Pagination from "./Pagination";
import "./Pokedex.css";
import Pokemoncard from "./Pokemoncard";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  console.log("pokemons carregados:", pokemons);
  const onLeftClickHandler = () => {
    console.log("page left");
    if (page > 0) {
      setPage(page-1)
    }
  }

  const onRightClickHandler = () => {
    console.log("page rigth");
    if (page+1 !== totalPages) {
      setPage(page+1)
    }
  }

  return (
    <div className="pokedex-body">
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
        page={page+1}
        totalPages={totalPages} 
        onLeftClick={onLeftClickHandler}
        onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>carregando agora </div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemoncard key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
