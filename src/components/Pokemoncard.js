import { useState, useEffect, useContext } from "react";
import React from "react";
import tradutor from "../extras/tradutor";
import "./Pokemoncard.css";
import FavoriteContext from "../contexts/favoritContext";
const Pokemoncard = (props) => {
  const { favoritedPokemons, updateFavoritedPokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const normal = pokemon.sprites.front_default;
  const shiny = pokemon.sprites.front_shiny;
  const [picurl, setPicurl] = useState(normal);
  console.log("pokemon map:", pokemon.types[0].type.name);

  const heart = favoritedPokemons.includes(pokemon.name) ? "❤️" : "💔️";
  const clickheart = () => {
    console.log("favoritando");
    updateFavoritedPokemons(pokemon.name);
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
    <div className="outer-card">
      {pokemon.types ? (
        <div className={`pokemon-${pokemon.types[0].type.name}-card`}>
          <div className="pokemon-img-div">
            <img
              onClick={shineShanger}
              src={picurl}
              alt={pokemon.name}
              className={"pokemon-image"}
            />
          </div>

          <div className="card-body">
            <div className="card-top">
              <div className="nameandheart">
              <h3>{tradutor(pokemon.name)}</h3>
              <button className="fav-button" onClick={clickheart}>
                {heart}
              </button>
              </div>
              <div className="id"><p>#{pokemon.id}</p></div>
            </div>

            <div className="card-botton">
              <div className="pokemon-type">
                {pokemon.types.map((type, index) => {
                  let tipo = type.type.name;
                  tipo = tradutor(tipo);
                  return (
                    <div key={index} className={`pokemon-${type.type.name}-txt`}>
                      <p>{tipo}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : ( null
      
      //   <div className={`pokemon-${pokemon.types[1].type.name}-card-second`}>
      //     <div className={`pokemon-${pokemon.types[0].type.name}-card-first`}>
      //     <div className="pokemon-img-div">
      //       <img
      //         onClick={shineShanger}
      //         src={picurl}
      //         alt={pokemon.name}
      //         className={"pokemon-image"}
      //       />
      //     </div>

      //     <div className="card-body">
      //       <div className="card-top">
      //         <h3>{pokemon.name}</h3>
      //         <div>#{pokemon.id}</div>
      //       </div>
            
      //       <div className="card-botton">
      //         <div className="pokemon-type">
      //           {pokemon.types.map((type, index) => {
      //             let tipo = type.type.name;
      //             tipo = tradutor(tipo);
      //             return (
      //               <div key={index} className={`pokemon-${tipo}-txt`}>
      //                 <p>{tipo}</p>
      //               </div>
      //             );
      //           })}
      //         </div>
      //         <button className="fav-button" onClick={clickheart}>
      //           {heart}
      //         </button>
      //       </div>
      //     </div>
      //     </div>
      //   </div>
      )
      }
    </div>
  );
};

export default Pokemoncard;
