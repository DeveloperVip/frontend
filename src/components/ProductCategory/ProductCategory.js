import React, { useState } from "react";
import "./ProductCategory.css";
import { Link } from "react-router-dom";
import { useFilterCategory } from "../../context/FilterCategoryContext";

const ProductCategory = ({ onSelectCategory }) => {
  const { selectedCategories, handleCategorySelect } = useFilterCategory();
  const [tagSelected,setTagSelected] = useState("")
  const utility = [
    {
      "Đồ điện tử": {
        name: "Technology",
        name1: [
          "Điện thoại",
          "Máy tính",
          "Tablet",
          "Phụ kiện công nghệ",
          "Máy giặt",
          "Tủ lạnh",
        ],
      },
    },
    {
      "Nội thất": {
        name: "Furniture",
        name1: ["Ghế", "Sofa", "Bàn", "Giường", "Khác"],
      },
    },
    {
      "Thời trang": {
        name: "Fashion",
        name1: ["Đầm/váy", "Dép và Guốc", "Quần", "Áo", "Balo", "Giày"],
      },
    },
    {
      "Thiết bị khác": {
        name: "Another",
        name1: [
          "Máy chiếu",
          "Tivi",
          "Quạt",
          "Gia dụng",
          "Bàn ủi",
          "Máy quay phim",
          "Máy ảnh",
          "Công cụ",
          "Máy in",
        ],
      },
    },
  ];
  const handleDropdownItemClick = (e, itemName) => {
    if(e.target.id === tagSelected) setTagSelected(null);
    else setTagSelected(e.target.id);
    return onSelectCategory(itemName)
  };
  return (
    <div className="product-category">
      <p>Danh mục sản phẩm</p>
      <hr />
      <div>
        <ul>
          {utility.map((nameCategory, index) => {
            const { name, name1 } = Object.values(nameCategory)[0];
            const productName = Object.keys(nameCategory);
            return (
              <li key={index}>
                <div className="main">
                  <Link
                    name={name}
                    onClick={() => handleCategorySelect(name)}
                    className={
                      selectedCategories.includes(name) ? "active" : ""
                    }
                  >
                    {productName}
                  </Link>
                </div>
                <div
                  className="dropdown-menu"
                  style={{
                    display: selectedCategories.includes(name)
                      ? "contents"
                      : "none",
                  }}
                >
                  {name1.map((itemName, index) => {
                    console.log(index);
                    return (
                    <Link
                      className={`dropdown-item ${tagSelected === itemName ? "select" : ""}`}
                      to="#"
                      id={itemName}
                      value={itemName}
                      onClick={(e)=>handleDropdownItemClick(e,itemName)}
                    >
                      {itemName}
                    </Link>
                  )})}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductCategory;
