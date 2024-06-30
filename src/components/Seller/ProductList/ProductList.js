import React from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

const ProductList = ({ products, onDelete }) => {
  const getProductsForCategory = (category) => {
    return Object.keys(products)
      .filter((productId) => products[productId].category === category)
      .map((productId, index) => (
        <li className="order-item" key={index}>
          <div>
            <Link>
              <div className="card-image">
                <img
                  src="https://demo037058.web30s.vn/datafiles/32952/upload/thumb_images/DienThoai/samsung-galaxy-z-fold-2-den-600x600.jpg?t=1626859711"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </Link>
            <div className="card-body">
              <p>Tên sản phẩm</p>
              <p>Giá sản phẩm</p>
              <Link href="#" className="btn btn-primary">
                <h5 className="card-title">Xem sản phẩm</h5>
              </Link>
            </div>
          </div>
          <button
            className="order-item-button"
            onClick={() => onDelete(productId)}
          >
            Delete
          </button>
        </li>
      ));
  };

  return (
    <div className="containers">
      <h2>Products</h2>
      <div className="table-section">
        <h3 className="table-header">Đồ điện tử</h3>
        <ul className="order-list">{getProductsForCategory("doDienTu")}</ul>
      </div>
      <div className="table-section">
        <h3 className="table-header">Nội thất</h3>
        <ul className="order-list">{getProductsForCategory("noiThat")}</ul>
      </div>
      <div className="table-section">
        <h3 className="table-header">Thời trang</h3>
        <ul className="order-list">{getProductsForCategory("thoiTrang")}</ul>
      </div>
      <div className="table-section">
        <h3 className="table-header">Thiết bị khác</h3>
        <ul className="order-list">{getProductsForCategory("thietBiKhac")}</ul>
      </div>
    </div>
  );
};

export default ProductList;
