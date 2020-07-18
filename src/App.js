import React from "react";
import RandomJoke from "./RandomJoke";
import SearchJoke from "./SearchJoke";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <RandomJoke />
      <SearchJoke />
    </div>
  );
}

export default App;
