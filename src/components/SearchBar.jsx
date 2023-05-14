import React from "react";
import { useState } from "react";

function SearchBar({ setSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    const text = event.target.value;
    setSearchValue(text);
    setSearch(text);
  };

  return (
    <div>
      <label>Search</label>
      <input value={searchValue} type="text" onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
