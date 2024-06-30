import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import icon từ thư viện react-icons
import "./SearchBar.css";
import PathUser from "../PathUser/PathUser";
import Cart from "../Cart/Cart";

const SearchBar = ({setToken}) => {
  
  return (
    <section className="nav-search">
    <div
      className="search-container"
      
    >
      <FaSearch style={{ width: "20px" }} />
      <div className="search-icon">
        <input type="text" placeholder="Search..." />
      </div>
      
    </div>
    <div><PathUser setToken={setToken}/></div>
    <div><Cart/></div>
    </section>
  );
};

export default SearchBar;
