const searchpokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    return response.json();
  } catch(error) {
    console.log("erro: ", error)
  }
};

const searchpokemonbyurl = async (url) => {
  try {
    const response = await fetch(url)
    return response.json();
  } catch(error) {
    console.log("erro: ", error)
  }
};

const getpokemons = async (limit = 50, offset=0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    return response.json();
  } catch(error) {
    console.log("erro: ", error)
  }
};

export { searchpokemon, getpokemons, searchpokemonbyurl };
