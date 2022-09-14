import { useState, useEffect } from "react";
import React from "react";
import tradutor from "../extras/tradutor";

const Pokemoncard = (props) => {
  const { pokemon } = props;
  const normal = pokemon.sprites.front_default;
  const shiny = pokemon.sprites.front_shiny;
  const [picurl, setPicurl] = useState(normal);
  console.log("pokemon map:", pokemon);

  const heart = "❤️";
  const clickheart = () => {
    console.log("favoritando");
  };

  useEffect(() => {
    console.log("Carregando");
    setPicurl(normal);
  }, [normal]);

  const shineShanger = () => {
    if (picurl === normal) {
      setPicurl(shiny);
    } else setPicurl(normal);
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-div">
        <img onClick={shineShanger} src={picurl} alt={pokemon.name} />
      </div>

      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>numero: {pokemon.id}</div>
        </div>

        <div className="card-botton">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              let tipo = type.type.name;
              tipo = tradutor(tipo)
              return (
                <div key={index} className="pokemon-type-txt">
                  tipo: {tipo}
                </div>
              );
            })}
          </div>
          <button className="fav-button" onClick={clickheart}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemoncard;
