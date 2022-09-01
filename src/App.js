import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div className="App"></div>
    </div>
  );
}

export default App;

// Baseado no codigo do video do canal pasquadev: https://www.youtube.com/watch?v=n2kkXup2T1c&t=629s&ab_channel=pasquadev