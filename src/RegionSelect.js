import React, { useEffect, useState } from "react";
import useCountriesData from "./useCountriesData";

const RegionSelect = ({ onSelectRegion }) => {
  const [country] = useCountriesData();
  const [region, setRegion] = useState("");

  const onChangeHandler = (event) => {
    setRegion(event.target.value);
    // country.map((item) => {
    //   return <p>{item.name}</p>;
    // });
  };
  useEffect(() => {
    const RegResults = country.filter((nation) =>
      nation.name.toLowerCase().includes(nation.region.toLowerCase())
    );
    onSelectRegion(RegResults);
  }, [country, onSelectRegion, region]);

  return (
    <select onChange={onChangeHandler}>
      {country.map((nation) => (
        <option key={nation.region} value={nation.region}>
          {nation.region}
        </option>
      ))}
    </select>
  );
};

export default RegionSelect;
