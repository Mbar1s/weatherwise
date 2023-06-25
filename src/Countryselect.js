import React from "react";
import axios from "axios";
import Countryweather from "./Countryweather.js"


export default function Countries() {
  const [country, setCountry] = React.useState([]);
  

  const cities = country.map(city => {
    return (
        <Countryweather key={city.iso3} {...city}/>
    )
  })

  React.useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        console.log(res);
        setCountry([res.data])
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  

  return <div>{cities}</div>;
}