import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import citydata from "./utils/city.list.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";

export default function Map(props) {
  const [weather, setWeather] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedCode, setSelectedCode] = React.useState("");
  const [citylist, setCitylist] = React.useState(citydata);
  const [selectedCities, setSelectedCities] = React.useState("");

  //BUTTON FOR GETTING CITIES AND CODES
  function getCountryData(value) {
    setSelectedCountry(value.target.value.slice(0, -3));
    setSelectedCode(value.target.value.slice(-2));
    console.log(selectedCountry);
    if (selectedCode !== value.target.value.slice(-2)) {
      setSelectedCities("");
      setWeather([]);
    }
  }

  //GET WEATHER DATA OF CITIES
  React.useEffect(() => {
    if (selectedCode) {
      citylist.map((city) => {
        if (city.country === selectedCode) {
          setSelectedCities((prevSelectedCities) => [
            ...prevSelectedCities,
            city.name,
          ]);
          console.log(selectedCities);
        }
        return citylist;
      });
    }
  }, [selectedCountry, selectedCode]);

  React.useEffect(() => {
    if (selectedCities) {
      for (let index = 0; index < 12; index++) {
        if (selectedCode) {
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?q=${selectedCities[index]},${selectedCode}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
            )
            .then((res) => {
              console.log(res);
              setWeather((prevWeather) => [...prevWeather, res.data]);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
  }, [selectedCode, selectedCities]);

  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center  text-[#B3005E] bg-[#112D4E]">
      <label htmlFor="country-select"></label>
      <select
        className="w-full text-3xl font-semibold text-center text-[#B3005E]  bg-[#252A34]"
        onChange={getCountryData}
        id="country-select"
      >
        <option>--Please choose a Country--</option>
        {props.data.map((e) => (
          <option value={[e.cities, e.iso2]}>{e.country}</option>
        ))}
      </select>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {weather.map((a) => (
          <div>
            {a.name !== "" ? (
              <Link
                to={`/Detailed/${a.name}`}
                state={{ cityInput: `${a.name}` }}
              >
                <div className=" p-10 gap-2 flex flex-col items-center border-2 border-[#E90064] bg-[#112D4E] text-[#B3005E] justify-center">
                  <h1 className="text-bold text-3xl">
                    {selectedCode === a.sys.country && a.name !== `""`
                      ? a.name
                      : null}
                  </h1>
                  <h2 className="text-bold text-3xl">
                    <FontAwesomeIcon icon={faTemperatureHalf} />{" "}
                    {selectedCode === a.sys.country
                      ? a.main && Math.floor(a.main.temp)
                      : null}
                    °C
                  </h2>
                  <h3 className="">
                    
                    {selectedCode === a.sys.country
                      ? a.weather && a.weather[0].description
                      : null}
                  </h3>
                  <img
                    className="h-auto w-36"
                    src={
                      "http://openweathermap.org/img/wn/" +
                      a.weather[0].icon +
                      "@2x.png"
                    }
                    alt="icon"
                  />
                </div>
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
