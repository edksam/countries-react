import React, { useEffect, useState } from "react";


const RegionSelect = ({ onSelectRegion }) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const [region, setRegion] = useState([]);

  const onChangeHandler = (event) => {
    setRegion(event.target.value);
      };

  // useEffect(() => {
  //   const RegionResults = country.filter((nation) =>
  //     nation.region.toLowerCase().includes(region.toLowerCase())
  //   );
  //   onSelectRegion(RegionResults);
  // }, [country, region, onSelectRegion]);

  return (
    <select onChange={onChangeHandler}>
      {regions.map((region, index) => (
        <option key={index} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

// function CharacterDropDown() {
//   const [loading, setLoading] = React.useState(true);
//   const [items, setItems] = React.useState([]);
//   const [value, setValue] = React.useState("R2-D2");
//   React.useEffect(() => {
//     let unmounted = false;
//     async function getCharacters() {
//       const response = await fetch(
//         "https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people"
//       );
//       const body = await response.json();
//       if (!unmounted) {
//         setItems(
//           body.results.map(({ name }) => ({ label: name, value: name }))
//         );
//         setLoading(false);
//       }
//     }
//     getCharacters();
//     return () => {
//       unmounted = true;
//     };
//   }, []);

//   return (
//     <select
//       disabled={loading}
//       value={value}
//       onChange={(e) => setValue(e.currentTarget.value)}
//     >
//       {items.map(({ label, value }) => (
//         <option key={value} value={value}>
//           {label}
//         </option>
//       ))}
//     </select>
//   );
// }

export default RegionSelect;
