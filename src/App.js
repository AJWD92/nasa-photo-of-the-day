import React from "react";
import NasaList from "./components/NasaList";
import NasaBackground from "./assets/NasaBackground.jpg"
import "./App.css";
    

function App() {
  return (
    <div className="App" style={{ background: "#fff" }}>
  <img className="spacePhoto" alt="Galxey" src={NasaBackground}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='rocketship'>🚀</span>!
      </p>
      <NasaList />
    </div>
  );
}

export default App;
