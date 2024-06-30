import React from "react";
import "./ProductBrand.css";
import { useFilterBrand } from "../../context/FilterBrandContext";

const ProductBrand = ({ product }) => {
  const { selectedBrands, handleBrandSelect } = useFilterBrand();
  const initial = [];
  product?.map((item) => {
    console.log(item.brand);
    const brand = item.brand;
    if(brand) return initial.push(item.brand);
    return 0;
  });
console.log(selectedBrands);
  return (
    <div className="brand">
      <h4>Thương hiệu</h4>
      <hr />
      {initial?.map((brand) => (
        <div className="form-check" key={brand}>
          <input
            className="form-check-input"
            type="checkbox"
            value={brand}
            id={brand}
            checked={selectedBrands.includes(brand)}
            onChange={() => handleBrandSelect(brand)}
          />
          <label className="form-check-label" htmlFor={brand}>
            {brand}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProductBrand;
