import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./components/GameItems";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Game />
      <button className="btn btn-primary">LOGIN</button>
    </div>
  );
}

export default App;
