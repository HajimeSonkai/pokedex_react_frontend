import "./Navbar.css"
import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritContext";

const Navbar = () => {
  const { favoritedPokemons } = useContext(FavoriteContext)
    const logourl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <nav>
      <div>
        <img
          alt="PokéAPI"
          src={logourl}
          className="navbar-img"
        />
      </div>
      <div>{favoritedPokemons.length}❤️</div>
    </nav>
  );
};

export default Navbar;
