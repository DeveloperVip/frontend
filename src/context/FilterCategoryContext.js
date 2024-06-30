import React, { createContext, useContext, useState } from "react";

const FilterCategoryContext = createContext();

export const useFilterCategory = () => useContext(FilterCategoryContext);

export const FilterCategoryProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategorySelect = (category) => {
    console.log(category);
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <FilterCategoryContext.Provider value={{ selectedCategories, handleCategorySelect }}>
      {children}
    </FilterCategoryContext.Provider>
  );
};
