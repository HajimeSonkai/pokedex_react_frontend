import "./Navbar.css"
import React from "react";

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
