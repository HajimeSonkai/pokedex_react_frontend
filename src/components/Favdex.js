import React, {useContext} from "react";
import "./Favdex.css";
import Pokemoncard from "./Pokemoncard";
import FavoriteContext from "../contexts/favoritContext";

const Favdex = (props) => {
  const { favoritedPokemons } = useContext(FavoriteContext)
  const { pokemons, loading } = props;
  console.log("pokemons carregados:", pokemons);

  return (
    <div className="favdex-body">
      <div className="favdex-header">
        <h1>Favdex</h1>
        <div className="favdex-total">{favoritedPokemons.length}❤️</div>
      </div>
      {loading ? (
        <div>carregando agora </div>
      ) : (
        <div className="favdex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemoncard key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Favdex;
