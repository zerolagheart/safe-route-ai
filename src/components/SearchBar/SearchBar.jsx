import "./SearchBar.css";

import { useState } from "react";
import axios from "axios";

function SearchBar({ setDestination }) {
  const [query, setQuery] = useState("");

  async function searchPlace(e) {
    if (e.key !== "Enter") return;

    try {
      const res = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: query,
            format: "json",
            limit: 1,
          },
        }
      );

      if (!res.data.length) {
        
        return;
      }

      setDestination({
        lat: Number(res.data[0].lat),
        lng: Number(res.data[0].lon),
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="search-bar">
      <div className="search-box">

        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="21" y1="21" x2="16.6" y2="16.6"></line>
        </svg>

        <input
          placeholder="Where are you going?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={searchPlace}
        />

      </div>
    </div>
  );
}

export default SearchBar;