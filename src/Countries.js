import React, { useEffect, useState } from "react";
import "./App.css";

const Countries = () => {
  const [hasError, setErrors] = useState(false);
  const [country, setCountry] = useState([]);

  //fetch data normally
  // const fetchCountry = () => {
  //   fetch("https://restcountries.eu/rest/v2/all")
  //     .then((res) => res.json())
  //     .then((country) => setCountry(country));
  // };
  //Fetch Data
  async function fetchCountries() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    res
      .json()
      .then((res) => setCountry(res))
      .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchCountries();
    // fetchCountry();
  }, []);
  // console.log(country);
  return (
    <>
      <div className="d-flex flex-wrap">
        {country.map((nation) => (
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
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                <h4 className="card-text">{country.population}</h4>
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
