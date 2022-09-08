import React from "react";

const Pokemoncard = (props) => {
  const { pokemon } = props;
  const heart = "❤️"
  const clickheart = () => {
    console.log("favoritando")
  }

  return (
    <div className="pokemon-card">

      <div className="pokemon-img-div">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>

      <div className="card-body">

        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>numero: {pokemon.id}</div>
        </div>

        <div className="card-botton">

          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-txt">
                  {type.type.name}
                </div>
              );
            })}
          </div>
            <button className="fav-button" onClick={clickheart}>{heart}</button>
        </div>

      </div>

    </div>
  );
};

export default Pokemoncard;
