import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [input, setInput] = React.useState("");

  function getSearchInput(value) {
    setInput(value.target.value);
    console.log(input);
  }

  const location = useLocation();

  return (
    <div className="flex flex-wrap gap-3 pr-3">
      <input
        className="p-2 rounded-lg focus:outline-none"
        type="text"
        onChange={getSearchInput}
        placeholder={location.state ? location.state.cityInput : "City"}
      ></input>
      <button disabled={!input} className="">
        {input ? (
          <Link to={`/Detailed/${input}`} state={{ cityInput: input }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        ) : (
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        )}
      </button>
    </div>
  );
}
