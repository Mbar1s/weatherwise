import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
export default function Navbar() {
  return (
    <nav className="bg-[#252A34] text-[#FF2E63] border-[#B3005E] px-2  py-2 w-full text-2xl font-bold">
      <div className=" flex flex-col sm:flex sm:flex-wrap sm:flex-row justify-between items-center mx-auto">
        <img
          className="w-20 rounded-full"
          src="https://cdn.dribbble.com/users/915711/screenshots/5827243/weather_icon3.png"
          alt="weather logo"
          draggable="false"
        />

        <div className="border border-[#252A34] hover:border hover:rounded-lg hover:border-[#B3005E] transition-all ease-in duration-200 hover:bg-[#b3005f33] p-2">
          <Link to="/">WeatherWise</Link>
        </div>
        <div className="border border-[#252A34] hover:border hover:rounded-lg hover:border-[#B3005E] transition-all ease-in duration-200 hover:bg-[#b3005f33] p-2">
          <Link to="/Countryselect">Select a Country</Link>
        </div>
        <div className="border border-[#252A34] hover:border hover:rounded-lg hover:border-[#B3005E] transition-all ease-in duration-200 hover:bg-[#b3005f33] p-2">
          <Link to="/Map">Map</Link>
        </div>
        <div className=" border border-[#252A34] hover:border hover:rounded-lg hover:border-[#B3005E] transition-all ease-in duration-200 hover:bg-[#b3005f33]">
          <Search />
        </div>
      </div>
    </nav>
  );
}
