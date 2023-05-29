import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";

export default function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   onSearch(searchTerm);
  // };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    handleSearch(query);
  };

  return (
    <div className="search-container">
    <div className="search-input">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  </div>
  );
}
