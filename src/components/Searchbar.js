import "./Searchbar.css";
import React from "react";
import { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState();

  const onChangeHandler = (e) => {
    console.log("onChange:", e.target.value);
    setSearch(e.target.value);
  };

  const onClickHandler = () => {
    console.log("procurando:", search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar o pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
