import React from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function Welcome() {
  const [location, setLocation] = React.useState("");
  const [locationWeather, setLocationWeather] = React.useState("");
  const [locationForecast, setLocationForecast] = React.useState("");

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        setLocation(position.coords);
      });
    }
  }, []);
  React.useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
      )
      .then((res) => {
        console.log(res);
        setLocationWeather(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
      )
      .then((res) => {
        console.log(res);
        setLocationForecast(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  return (
    <div className="">
      <Forecast locationForecast={locationForecast} locationWeather={locationWeather}/>
    </div>
  );
}
