import React from "react";
import "./App.css";

const Countries = ({ searchResult }) => {
  return (
    <>
      <div className="d-flex flex-wrap">
        {searchResult.map((nation) => (
          <div className="card-deck" style={{ width: "18rem" }}>
            <div className="card">
              <img
                src={nation.flag}
                className="card-img-top"
                style={{ height: "10rem" }}
                alt="Nations"
              />
              <div className="card-body">
                <h2 className="card-title">{nation.name}</h2>
                <h4 className="card-text">{nation.population}</h4>
                <h4 className="card-text">{nation.region}</h4>
                <h4 className="card-text">{nation.capital}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countries;
