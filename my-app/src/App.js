import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./components/GameItems";
import Form1 from "./components/Form1";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Game />
      <Form1 />
      <button className="btn btn-primary">LOGIN</button>
      
    </div>
  );
}

export default App;
