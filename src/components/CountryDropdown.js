import React from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";


const CountryDropDown = ({ graduate, setGraduate }) => {
  const selectCountry = (val) => {
    setGraduate({ ...graduate, "country": val });
  };
  const selectRegion = (val) => {
    setGraduate({ ...graduate, "region": val });
  };
  return (
    <div>
      <CountryDropdown
        value={graduate.country}
        onChange={(val) => selectCountry(val)}
      />
      <RegionDropdown
        country={graduate.country}
        value={graduate.region}
        onChange={(val) => selectRegion(val)}
      />
    </div>
  );
};
export default CountryDropDown;