import React, {useEffect, useState } from "react";
import "./ProductMain.css";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";

const ProductMain = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Kiểm tra xem token có tồn tại trong localStorage không
    axios.get("http://localhost:8000/product/")
      .then((response) => {
        console.log(response.data)
        // Xử lý dữ liệu sản phẩm
        setProducts(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi khi gọi API
        console.error("Error fetching products:", error);
      });
    } , []);
  const navigate = useNavigate();
  const [state, setState] = useState("technology");
  const handleClick = (e) => {
    switch (e.target.name) {
      case "technology":
        setState("technology");
        break;
      case "furniture":
        setState("furniture");
        break;
      default:
        setState("fashion");
    }
  };
  const handleClickNavigate = () => {
    navigate("/product");
  };
  return (
    <div className="product-main">
      <h2>
        <strong>SẢN PHẨM CHÍNH</strong>
      </h2>
      <div>
        <div className="press">
          <button onClick={handleClick} name="technology">
            Đồ điện tử
          </button>
          <button onClick={handleClick} name="furniture">
            Nội thất
          </button>
          <button onClick={handleClick} name="fashion">
            Thời trang
          </button>
        </div>
        <div
          style={{ display: state === "technology" ? "grid" : "none" }}
          className="list-product technology"
        >
          {products.map((item)=>{return <ProductItem products={item}/>})}
          
        </div>
        <div
          style={{ display: state === "furniture" ? "grid" : "none" }}
          className="list-product furniture"
        >
          {products.map((item)=>{return <ProductItem products={item}/>})}
        </div>
        <div
          style={{ display: state === "fashion" ? "grid" : "none" }}
          className="list-product fashion"
        >
          {products.map((item)=>{return <ProductItem products={item}/>})}
        </div>
        <div className="product-page">
          <button onClick={handleClickNavigate}>
            <span>XEM THÊM</span>
            <span><svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-arrow-clockwise"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
          </svg></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductMain;
