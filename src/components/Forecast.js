import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faTemperatureHalf,
  faFire,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { format, fromUnixTime } from "date-fns";

export default function Forecast({
  locationForecast,
  locationWeather,
  searchWeather,
  searchForecast,
}) {
  const [outputWeather, setOutputWeather] = React.useState("");
  const [outputForecast, setOutputForecast] = React.useState("");

  React.useEffect(() => {
    if (locationWeather) {
      setOutputWeather(locationWeather);
      setOutputForecast(locationForecast);
    } else if (searchWeather) {
      setOutputWeather(searchWeather);
      setOutputForecast(searchForecast);
    }
  }, [locationWeather, searchWeather, locationForecast, searchForecast]);

  console.log(outputWeather);
  console.log(outputForecast);

  return (
    <div>
      {outputWeather ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  w-full lg:h-screen md:h-full  bg-no-repeat bg-cover bg-center bg-[#112D4E] text-[#EEEEEE]">
          <div className="flex flex-col items-center border border-t-0 border-l-0 border-[#E90064] justify-center">
            <div className="flex flex-row gap-5">
              <h1 className="text-3xl font-bold">
                {outputWeather.name} Now <br></br>
              </h1>
              <h1 className="text-3xl font-bold ">
                <FontAwesomeIcon icon={faTemperatureHalf} />{" "}
                {outputWeather.main && Math.floor(outputWeather.main.temp)}
                °C
              </h1>
            </div>
            <div className="flex flex-row-reverse gap-10">
              <img
                className="h-auto w-36"
                src={
                  "http://openweathermap.org/img/wn/" +
                  outputWeather.weather[0].icon +
                  "@2x.png"
                }
                alt="icon"
                draggable="false"
              />
              <h2 className="text-2xl font-semibold self-center">
                {outputWeather.weather[0].description}
              </h2>
            </div>
            <div className="flex flex-row gap-5 text-2xl font-semibold">
              <div className="flex flex-col gap-5  ">
                <p>
                  <FontAwesomeIcon icon={faFire} /> Feels Like:{" "}
                  {Math.floor(outputWeather.main.feels_like)}
                  °C
                </p>
                <p>
                  Wind degree:{" "}
                  <FontAwesomeIcon
                    style={{
                      transform: `rotate(${outputWeather.wind.deg}deg)`,
                    }}
                    icon={faArrowRightLong}
                  />{" "}
                  {outputWeather.wind.deg}
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p>Humidity: {outputWeather.main.humidity}%</p>
                <p>
                  <FontAwesomeIcon icon={faWind} />{" "}
                  {Math.floor(outputWeather.wind.speed)} km/s
                </p>
              </div>
            </div>
          </div>
          {outputForecast ? (
            <div className="flex flex-col items-center border border-t-0 border-[#E90064] justify-center">
              <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-bold">
                  {outputWeather.name} <br></br>
                </h1>
                <h1 className="text-3xl font-bold">
                  {format(
                    new Date(
                      fromUnixTime(
                        outputForecast.list && outputForecast.list[5].dt
                      )
                    ),
                    "eeee"
                  )}
                </h1>
                <h1 className="text-3xl font-bold">
                  <FontAwesomeIcon icon={faTemperatureHalf} />{" "}
                  {outputForecast.list[5] &&
                    Math.floor(outputForecast.list[5].main.temp)}
                  °C
                </h1>
              </div>
              <div className="flex flex-row gap-5 text-2xl font-semibold ">
                <h2 className="self-center">
                  {outputForecast.list[5] &&
                    outputForecast.list[5].weather[0].description}
                </h2>
                <img
                  className="h-auto w-36"
                  src={
                    "http://openweathermap.org/img/wn/" +
                    (outputForecast.list[5].weather[0] &&
                      outputForecast.list[5].weather[0].icon) +
                    "@2x.png"
                  }
                  alt="icon"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col gap-5 text-2xl font-semibold">
                <div className="flex flex-row gap-5">
                  <p>
                    <FontAwesomeIcon icon={faFire} /> Feels Like:{" "}
                    {outputForecast.list[5] &&
                      Math.floor(outputForecast.list[5].main.feels_like)}
                    °C
                  </p>
                  <p>
                    Humidity:{" "}
                    {outputForecast.list[5] &&
                      Math.floor(outputForecast.list[5].main.humidity)}
                    %
                  </p>
                </div>
                <div className="flex flex-row gap-5 text-2xl font-semibold">
                  <p>
                    Wind Degree:{" "}
                    <FontAwesomeIcon
                      style={{
                        transform: `rotate(${outputForecast.list[5].wind.deg}deg)`,
                      }}
                      icon={faArrowRightLong}
                    />{" "}
                    {outputForecast.list[5] &&
                      Math.floor(outputForecast.list[5].wind.deg)}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faWind} />{" "}
                    {outputForecast.list[5] &&
                      Math.floor(outputForecast.list[5].wind.speed)}{" "}
                    km/s
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          {outputForecast ? (
            <div className="flex flex-col items-center border border-t-0 border-r-0 border-[#E90064] justify-center">
              <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-bold">
                  {outputWeather.name} <br></br>
                </h1>
                <h1 className="text-3xl font-bold">
                  {format(
                    new Date(
                      fromUnixTime(
                        outputForecast.list && outputForecast.list[13].dt
                      )
                    ),
                    "eeee"
                  )}
                </h1>
                <h1 className="text-3xl font-bold">
                  <FontAwesomeIcon icon={faTemperatureHalf} />{" "}
                  {outputForecast.list[13] &&
                    Math.floor(outputForecast.list[13].main.temp)}
                  °C
                </h1>
              </div>
              <div className="flex flex-row gap-5 text-2xl font-semibold">
                <h2 className="self-center">
                  {outputForecast.list[13] &&
                    outputForecast.list[13].weather[0].description}
                </h2>
                <img
                  className="h-auto w-36"
                  src={
                    "http://openweathermap.org/img/wn/" +
                    (outputForecast.list[13].weather[0] &&
                      outputForecast.list[13].weather[0].icon) +
                    "@2x.png"
                  }
                  alt="icon"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col gap-5 text-2xl font-semibold">
                <div className="flex flex-row gap-5">
                  <p>
                    <FontAwesomeIcon icon={faFire} /> Feels Like:{" "}
                    {outputForecast.list[13] &&
                      Math.floor(outputForecast.list[13].main.feels_like)}
                    °C
                  </p>
                  <p>
                    Humidity:{" "}
                    {outputForecast.list[13] &&
                      Math.floor(outputForecast.list[13].main.humidity)}
                    %
                  </p>
                </div>
                <div className="flex flex-row gap-5 text-2xl font-semibold">
                  <p>
                    Wind Degree:{" "}
                    <FontAwesomeIcon
                      style={{
                        transform: `rotate(${outputForecast.list[13].wind.deg}deg)`,
                      }}
                      icon={faArrowRightLong}
                    />{" "}
                    {outputForecast.list[13] &&
                      Math.floor(outputForecast.list[13].wind.deg)}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faWind} />{" "}
                    {outputForecast.list[13] &&
                      Math.floor(outputForecast.list[13].wind.speed)}{" "}
                    km/s
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          {outputForecast ? (
            <div className="flex flex-col items-center border border-t-0 border-l-0 border-[#E90064] justify-center">
              <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-bold">
                  {outputWeather.name} <br></br>
                </h1>
                <h1 className="text-3xl font-bold">
                  {format(
                    new Date(
                      fromUnixTime(
                        outputForecast.list && outputForecast.list[21].dt
                      )
                    ),
                    "eeee"
                  )}
                </h1>
                <h1 className="text-3xl font-bold">
                  <FontAwesomeIcon icon={faTemperatureHalf} />{" "}
                  {outputForecast.list[21] &&
                    Math.floor(outputForecast.list[21].main.temp)}
                  °C
                </h1>
              </div>
              <div className="flex flex-row gap-5 text-2xl font-semibold">
                <h2 className="self-center">
                  {outputForecast.list[21] &&
                    outputForecast.list[21].weather[0].description}
                </h2>
                <img
                  className="h-auto w-36"
                  src={
                    "http://openweathermap.org/img/wn/" +
                    (outputForecast.list[21].weather[0] &&
                      outputForecast.list[21].weather[0].icon) +
                    "@2x.png"
                  }
                  alt="icon"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col gap-5 text-2xl font-semibold">
                <div className="flex flex-row gap-5">
                  <p>
                    <FontAwesomeIcon icon={faFire} /> Feels Like:{" "}
                    {outputForecast.list[21] &&
                      Math.floor(outputForecast.list[21].main.feels_like)}
                    °C
                  </p>
                  <p>
                    Humidity:{" "}
                    {outputForecast.list[21] &&
                      Math.floor(outputForecast.list[21].main.humidity)}
                    %
                  </p>
                </div>
                <div className="flex flex-row gap-5 text-2xl font-semibold">
                  <p>
                    Wind Degree:{" "}
                    <FontAwesomeIcon
                      style={{
                        transform: `rotate(${outputForecast.list[21].wind.deg}deg)`,
                      }}
                      icon={faArrowRightLong}
                    />{" "}
                    {outputForecast.list[21] &&
                      Math.floor(outputForecast.list[21].wind.deg)}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faWind} />{" "}
                    {outputForecast.list[21] &&
                      Math.floor(outputForecast.list[21].wind.speed)}{" "}
                    km/s
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          {outputForecast ? (
            <div className="flex flex-col items-center border border-t-0 border-[#E90064] justify-center">
              <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-bold">
                  {outputWeather.name} <br></br>
                </h1>
                <h1 className="text-3xl font-bold">
                  {format(
                    new Date(
                      fromUnixTime(
                        outputForecast.list && outputForecast.list[29].dt
                      )
                    ),
                    "eeee"
                  )}
                </h1>
                <h1 className="text-3xl font-bold">
                  <FontAwesomeIcon icon={faTemperatureHalf} />{" "}
                  {outputForecast.list[29] &&
                    Math.floor(outputForecast.list[29].main.temp)}
                  °C
                </h1>
              </div>
              <div className="flex flex-row gap-5 text-2xl font-semibold">
                <h2 className="self-center">
                  {outputForecast.list[29] &&
                    outputForecast.list[29].weather[0].description}
                </h2>
                <img
                  className="h-auto w-36"
                  src={
                    "http://openweathermap.org/img/wn/" +
                    (outputForecast.list[29].weather[0] &&
                      outputForecast.list[29].weather[0].icon) +
                    "@2x.png"
                  }
                  alt="icon"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col gap-5 text-2xl font-semibold">
                <div className="flex flex-row gap-5">
                  <p>
                    <FontAwesomeIcon icon={faFire} /> Feels Like:{" "}
                    {outputForecast.list[29] &&
                      Math.floor(outputForecast.list[29].main.feels_like)}
                    °C
                  </p>
                  <p>
                    Humidity:{" "}
                    {outputForecast.list[29] &&
                      Math.floor(outputForecast.list[29].main.humidity)}
                    %
                  </p>
                </div>
                <div className="flex flex-row gap-5 text-2xl font-semibold">
                  <p>
                    Wind Degree:{" "}
                    <FontAwesomeIcon
                      style={{
                        transform: `rotate(${outputForecast.list[29].wind.deg}deg)`,
                      }}
                      icon={faArrowRightLong}
                    />{" "}
                    {outputForecast.list[29] &&
                      Math.floor(outputForecast.list[29].wind.deg)}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faWind} />{" "}
                    {outputForecast.list[29] &&
                      Math.floor(outputForecast.list[29].wind.speed)}{" "}
                    km/s
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          {outputForecast ? (
            <div className="flex flex-col items-center border border-t-0 border-r-0 border-[#E90064] justify-center">
              <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-bold">
                  {outputWeather.name} <br></br>
                </h1>
                <h1 className="text-3xl font-bold">
                  {format(
                    new Date(
                      fromUnixTime(
                        outputForecast.list && outputForecast.list[37].dt
                      )
                    ),
                    "eeee"
                  )}
                </h1>
                <h1 className="text-3xl font-bold">
                  <FontAwesomeIcon icon={faTemperatureHalf} />{" "}
                  {outputForecast.list[37] &&
                    Math.floor(outputForecast.list[37].main.temp)}
                  °C
                </h1>
              </div>
              <div className="flex flex-row gap-5 text-2xl font-semibold">
                <h2 className="self-center">
                  {outputForecast.list[37] &&
                    outputForecast.list[37].weather[0].description}
                </h2>
                <img
                  className="h-auto w-36"
                  src={
                    "http://openweathermap.org/img/wn/" +
                    (outputForecast.list[37].weather[0] &&
                      outputForecast.list[37].weather[0].icon) +
                    "@2x.png"
                  }
                  alt="icon"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col gap-5 text-2xl font-semibold">
                <div className="flex flex-row gap-5">
                  <p>
                    <FontAwesomeIcon icon={faFire} /> Feels Like:{" "}
                    {outputForecast.list[37] &&
                      Math.floor(outputForecast.list[37].main.feels_like)}
                    °C
                  </p>
                  <p>
                    Humidity:{" "}
                    {outputForecast.list[37] &&
                      Math.floor(outputForecast.list[37].main.humidity)}
                    %
                  </p>
                </div>
                <div className="flex flex-row gap-5 text-2xl font-semibold">
                  <p>
                    Wind Degree:{" "}
                    <FontAwesomeIcon
                      style={{
                        transform: `rotate(${outputForecast.list[37].wind.deg}deg)`,
                      }}
                      icon={faArrowRightLong}
                    />{" "}
                    {outputForecast.list[37] &&
                      Math.floor(outputForecast.list[37].wind.deg)}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faWind} />{" "}
                    {outputForecast.list[37] &&
                      Math.floor(outputForecast.list[37].wind.speed)}{" "}
                    km/s
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
