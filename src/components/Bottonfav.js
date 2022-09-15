import "./Bottonfav.css"
import React, {useContext, useState, useEffect} from "react";
import FavoriteContext from "../contexts/favoritContext";
import { searchpokemon } from "../ApiConections.js/api";
import Favdex from "./Favdex";

const Bottonfav = () => {
  const [favloading, setFavloading] = useState(true);
  const [favpokemons, setFavpokemons] = useState([]);
  const [favfetch, setFavfetch] = useState([]);
  const { favoritedPokemons } = useContext(FavoriteContext)
  console.log(favoritedPokemons)

  useEffect(() => {
    setFavfetch(favoritedPokemons)
    fetchApi(favfetch)
    console.log("os favoritos são:", favfetch)
  }, [favfetch, favoritedPokemons]);

  const fetchApi = async (favfetch) => {
    try {
      const promises = favfetch.map(async (result) => {
        return await searchpokemon(result);
      });
      const results = await Promise.all(promises);
      setFavpokemons(results);
      setFavloading(false);
      console.log("fetch result:", results);
    } catch (error) {
      console.log("getPokemon Error:", error);
    }
  };

  return (
      <div>
      {favfetch.length >0 ? <Favdex
          pokemons={favpokemons}
          loading={favloading}
        /> : <div></div>}
      </div>
  );
};

export default Bottonfav;
