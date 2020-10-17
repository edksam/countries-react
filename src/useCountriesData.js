// eslint-disable-next-line 
import React, { useState, useEffect } from "react";

const useCountriesData = () => {
//   const [hasError, setErrors] = useState(false);
  const [country, setCountry] = useState([]);

  //Fetch Data
  async function fetchCountries() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    res
      .json()
      .then((res) => setCountry(res))
    //   .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchCountries();
  }, []);
  return[country]
  // console.log(country);
};

<<<<<<< HEAD
export default useCountriesData;
=======
export default useCountriesData;
>>>>>>> 64955a2fa89da3a93871159ceb632d4c582d0e5c
