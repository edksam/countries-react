import React, { useState } from "react";
import Header from "./Header";
import Countries from "./Countries";
import Search from "./Search";
import RegionSelect from "./RegionSelect";
import "./index";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  // const [regionResult, setRegionResult] = useState([]);
  return (
    <div className="App">
      <Header />
      <Search onSearchResults={setSearchResults} />
      <RegionSelect onSelectRegion={searchResults} />
      <Countries searchResult={searchResults} />
    </div>
  );
}

export default App;
