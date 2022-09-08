import React from "react";

const Pokemoncard = (props) => {
    const { pokemon} = props;
    return (
        <div>
            <div>{pokemon.name}</div>
        </div>
    )
}

export default Pokemoncard