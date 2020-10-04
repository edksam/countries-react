import React, { useEffect, useState } from "react";

const Countries = () => {
  const [hasError, setErrors] = useState(false);
  const [country, setCountry] = useState([]);

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
  }, []);
  // console.log(country);
  return (
    <>
      {country.map((nation) => (
        <div className="card-deck">
          <div className="card">
            <img src={nation.flag} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{nation.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
                <p className="card-text">{country.population}</p>
                <p>{nation.region}</p>
                <p>{nation.capital}</p>
           
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Countries;
