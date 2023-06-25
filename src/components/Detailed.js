import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Forecast from "./Forecast";

export default function Detailed() {
  //TODO: Being able to click on a location's country to see other weather data
  //TODO: Add 5 day weather data
  //TODO: Add a graph with 5 day weather

  const location = useLocation();
  const [detailsOfSelectedCity, setDetailsOfSelectedCity] = React.useState("");
  const [searchWeather, setSearchWeather] = React.useState("");
  const [searchForecast, setSearchForecast] = React.useState("");

  //For Detailed Data From Selecting Country and Searching

  React.useEffect(() => {
    setDetailsOfSelectedCity(location.state.cityInput);
    if (location.state.cityInput) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${detailsOfSelectedCity}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
        )
        .then((res) => {
          console.log(res);
          setSearchWeather(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location.state.cityInput, detailsOfSelectedCity]);

  React.useEffect(() => {
    setDetailsOfSelectedCity(location.state.cityInput);
    if (location.state.cityInput) {
      axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${detailsOfSelectedCity}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
      )
        .then((res) => {
          console.log(res);
          setSearchForecast(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location.state.cityInput, detailsOfSelectedCity]);


  return (
    <div className=" w-full h-screen  bg-no-repeat bg-cover bg-center bg-[#060047] text-[#B3005E]">
      <Forecast searchForecast={searchForecast} searchWeather={searchWeather}/>
    </div>
  );
}
