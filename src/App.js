import React, { useState } from "react";
import Countries from "./Countries";
import Search from "./Search";
import RegionSelect from "./RegionSelect"

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <Search onSearchResults={setSearchResults} />
      <RegionSelect onSelectRegion={searchResults} />
      <Countries searchResult={searchResults} />
    </div>
  );
}

export default App;
