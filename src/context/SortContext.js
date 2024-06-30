import React, { createContext, useContext, useState } from "react";

const SortContext = createContext();

export const useSort = () => useContext(SortContext);

export const SortProvider = ({ children }) => {
  const [selectedDisplay, setSelectedDisplay] = useState("12");
  const [selectedSort, setSelectedSort] = useState("default");

  const handleChangeDisplay = (e) => {
    setSelectedDisplay(e.target.value);
  };

  const handleChangeSort = (e) => {
    setSelectedSort(e.target.value);
  };

  return (
    <SortContext.Provider
      value={{ selectedDisplay, selectedSort, handleChangeDisplay, handleChangeSort }}
    >
      {children}
    </SortContext.Provider>
  );
};
