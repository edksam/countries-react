import React, { useState } from "react";
import Countries from "./Countries";
import Search from "./Search";
import RegionSelect from "./RegionSelect";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [regionResults, setRegionResults] = useState([]);

  return (
    <div className="App">
      <Search onSearchResults={setSearchResults} />
      <RegionSelect onSelectRegion={setRegionResults} />
      <Countries searchResult={searchResults} regionResult={regionResults} />
    </div>
  );
}

export default App;
