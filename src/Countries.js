import React from "react";
import useCountriesData from "./useCountriesData";

const Countries = ({ searchResult }) => {
  const [country] = useCountriesData();
  return (
    <>
      {searchResult.map((nation) => (
        <div className="card-group">
          <div className="card-deck">
            <div className="card">
              <img src={nation.flag} className="card-img-top" alt="countries" />
              <div className="card-body">
                <h5 className="card-title">{nation.name}</h5>
                
                <p className="card-text">{nation.population}</p>
                <p>{nation.region}</p>
                <p>{nation.capital}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Countries;
