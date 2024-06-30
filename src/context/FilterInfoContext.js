import React, { createContext, useContext, useState } from "react";
import formatCurrency from "../utils/FormatCurrency";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [filterOptions, setFilterOptions] = useState({
    sizeOfNumber: [],
    color: [],
    sizeOfString: [],
    internalMemory: [],
    material: [],
    priceRange: [],
  });

  const [priceRange, setPriceRange] = useState([0, 100000000]);

  const updateFilterOption = (category, value) => {
    setFilterOptions((prevOptions) => {
      // Kiểm tra nếu category là 'priceRange' thì ghi đè giá trị
      if (category === "priceRange") {
        return {
          ...prevOptions,
          [category]: value,
        };
      }

      const currentValues = prevOptions[category];

      // Kiểm tra xem giá trị đã tồn tại trong mảng chưa
      if (currentValues.includes(value)) {
        // Nếu đã tồn tại, loại bỏ giá trị
        return {
          ...prevOptions,
          [category]: currentValues.filter((item) => item !== value),
        };
      } else {
        // Nếu chưa tồn tại, thêm giá trị vào mảng
        return {
          ...prevOptions,
          [category]: [...currentValues, value],
        };
      }
    });
  };

  return (
    <FilterContext.Provider
      value={{
        filterOptions,
        updateFilterOption,
        formatCurrency,
        priceRange,
        setPriceRange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};