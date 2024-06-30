import React, { createContext, useContext, useState } from "react";

const FilterBrandContext = createContext();

export const useFilterBrand = () => useContext(FilterBrandContext);

export const FilterBrandProvider = ({ children }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleBrandSelect = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <FilterBrandContext.Provider value={{ selectedBrands, handleBrandSelect }}>
      {children}
    </FilterBrandContext.Provider>
  );
};
