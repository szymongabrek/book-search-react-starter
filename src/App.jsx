import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <div>
      <h1>Wyszukiwacz Książek</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
