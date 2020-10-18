import React, { useState, useEffect, Fragment } from "react";
import useCountriesData from "./useCountriesData";

const Search = ({ onSearchResults }) => {
  const [country] = useCountriesData();
  const [searchItem, setSearchItem] = useState("");

  const handleSearchInput = (event) => {
    setSearchItem(event.target.value);
    // console.log(country);
  };

  useEffect(() => {
    const results = country.filter((nation) =>
      nation.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    onSearchResults(results);
    console.log(results);
  }, [country, searchItem, onSearchResults]);
  return (
    <Fragment>
      <div className="App">
        <input
          type="text"
          placeholder="Search"
          value={searchItem}
          onChange={handleSearchInput}
        />
      </div>
    </Fragment>
  );
};

export default Search;
