import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex />
    </div>
  );
}

export default App;

// Baseado no codigo do video do canal pasquadev: https://www.youtube.com/watch?v=n2kkXup2T1c&t=629s&ab_channel=pasquadev