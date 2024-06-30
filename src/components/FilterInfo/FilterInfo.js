import React, { useEffect, useState } from "react";
import "./FilterInfo.css";
import Slider from "react-slider";
import { useFilterContext } from "../../context/FilterInfoContext";

const min = 0;
const max = 100000000;

const FilterInfo = ({ products }) => {
  const { filterOptions, updateFilterOption, formatCurrency } =
    useFilterContext(); // Sử dụng context hook để truy cập vào các giá trị và hàm từ context
  const [values, setValues] = useState([min, max]); // Sử dụng giá trị duy nhất thay vì mảng
  const handleCheckboxChange = (category, value) => {
    updateFilterOption(category, value); // Cập nhật giá trị khi checkbox thay đổi
  };
  useEffect(() => {
    handleCheckboxChange("priceRange", values);
  }, [values]);
  const handleSliderChange = (newValue) => {
    setValues(newValue); // Cập nhật giá trị khi thanh trượt thay đổi
  };

  return (
    <div className="my-4 filter-info">
      <h4>Bộ lọc</h4>
      <hr />
      <div className="form-group d-flex flex-column gap-3">
        <div>
          <p>Khoảng giá</p>
          <div style={{ position: "relative", height: "30px", left: "10px" }}>
            <span style={{ left: "0%" }}>
              {values[0] !== min ? "" : formatCurrency(min)}
            </span>
            <span style={{ left: "65%" }}>
              {values[1] !== max ? "" : formatCurrency(max)}
            </span>
            <span style={{ left: `${(values[0] * 65) / max}%` }}>
              {values[0] !== min ? formatCurrency(values[0]) : ""}
            </span>
            <span style={{ left: `${(values[1] * 65) / max}%` }}>
              {values[1] !== max ? formatCurrency(values[1]) : ""}
            </span>
          </div>
          <Slider
            className="slider"
            onChange={handleSliderChange}
            value={values}
            min={min}
            max={max}
          />
        </div>
        {/* Filter Kích cỡ */}
        <div className="d-flex justify-content-between flex-column">
          <p>Kích cỡ</p>
          {products?.map((value) => {
            if (!value.sizeOfNumber) return null;
            return (
              <div className="form-check" key={value.sizeOfNumber}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  // checked={value.includes(value.sizeOfNumber)}
                  onChange={() =>
                    handleCheckboxChange("sizeOfNumber", value.sizeOfNumber)
                  }
                  id={`sizeOfNumber-${value.sizeOfNumber}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`sizeOfNumber-${value.sizeOfNumber}`}
                >
                  {value.sizeOfNumber}
                </label>
              </div>
            );
          })}
        </div>
        {/* Filter Màu sắc */}
        <div className="d-flex justify-content-between flex-column">
          <p>Màu sắc</p>
          {products?.map((item, index) => {
            if (!item.color) return null;
            const { name, value } = item.color;
            const color = value;
            return (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  // checked={colorObj.color.includes(color)}
                  onChange={() => handleCheckboxChange("color", color)}
                  id={`color-${color}`}
                />
                <div
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: color,
                  }}
                ></div>
                <label className="form-check-label" htmlFor={`color-${color}`}>
                  {name}
                </label>
              </div>
            );
          })}
        </div>
        {/* Filter Kích cỡ quần áo */}
        <div className="d-flex justify-content-between flex-column">
          <p>Kích cỡ quần áo</p>
          {products?.map((value) => {
            if (!value.sizeOfString) return null;
            return (
              <div className="form-check" key={value.sizeOfString}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  // checked={value.includes(value.sizeOfString)}
                  onChange={() =>
                    handleCheckboxChange("sizeOfString", value.sizeOfString)
                  }
                  id={`sizeOfString-${value.sizeOfString}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`sizeOfString-${value.sizeOfString}`}
                >
                  {value.sizeOfString}
                </label>
              </div>
            );
          })}
        </div>
        {/* Filter Bộ nhớ trong */}
        <div className="d-flex justify-content-between flex-column">
          <p>Bộ nhớ trong</p>
          {products?.map((value) => {
            if (!value.internalMemory) return null;
            return (
              <div className="form-check" key={value.internalMemory}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  // checked={value.includes(value.internalMemory)}
                  onChange={() =>
                    handleCheckboxChange("internalMemory", value.internalMemory)
                  }
                  id={`internalMemory-${value.internalMemory}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`internalMemory-${value.internalMemory}`}
                >
                  {value.internalMemory}
                </label>
              </div>
            );
          })}
        </div>
        {/* Filter Chất liệu */}
        <div className="d-flex justify-content-between flex-column">
          <p>Chất liệu</p>
          {products?.map((value) => {
            if (!value.material) return null;
            return (
              <div className="form-check" key={value.material}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  // checked={value.includes(value.material)}
                  onChange={() =>
                    handleCheckboxChange("material", value.material)
                  }
                  id={`material-${value.material}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`material-${value.material}`}
                >
                  {value.material}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterInfo;
