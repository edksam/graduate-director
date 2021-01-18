// eslint-disable-next-line
import React, { useState, useEffect } from "react";

const useGraduatesData = () => {
  //   const [hasError, setErrors] = useState(false);
  const [graduates, setGraduates] = useState([]);

  //Fetch Data
  async function fetchCountries() {
    const res = await fetch("http://localhost:3030/graduates");
    res.json().then((res) => setGraduates(res));
    //   .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchCountries();
  }, []);
  return [graduates];
  // console.log(country);
};

export default useGraduatesData;
