import React, { useEffect, useState } from "react";
import useCountriesData from "./useCountriesData";

const RegionSelect = (onSelectRegion) => {
  const [country] = useCountriesData();
  const [region, setRegion] = useState("");

  const onChangeHandler = (event) => {
    setRegion(event.target.value);
    // country.map((item) => {
    //   return <p>{item.name}</p>;
    // });
  };
  useEffect(() => {

  }, [])

  return (
    <select onChange={onChangeHandler}>
      {country.map((nation) => (
        <option key={nation.name} value={nation.name}>
          {nation.region}
        </option>
      ))}
    </select>
  );
};

export default RegionSelect;
