import "./index.css";
import Countryselect from "./Countryselect.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Map from "./components/Map.js";
import Detailed from "./components/Detailed";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detailed/:search" element={<Detailed />} />
        <Route path="/Countryselect" element={<Countryselect />} />
        <Route path="/Map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
