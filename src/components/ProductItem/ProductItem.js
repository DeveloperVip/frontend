import React, { useEffect } from "react";
import "./ProductItem.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import formatCurrency from "../../utils/FormatCurrency";
import APIproductOrder from "../../services/productOrder/APIproductOrder";
import { useProductOrder } from "../../context/ProductOrderContext";

const ProductItem = ({ basket, products, addToBasket, updateBasketItem }) => {
  console.log(basket);
  const [isLiked, setIsLiked] = useState(false);
  const cartEmpty = basket?.filter((item) => item.status === "pending");
  // console.log("🚀 ~ ProductItem ~ cartEmpty:", cartEmpty);
  const [order, setOrder] = useState("");
  const [update, setUpdate] = useState(false);
  const [addedToBasket, setAddedToBasket] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token_user");
  const { _id, name, price, file, description, size } = products;
  const { state, dispatch } = useProductOrder(); // Use context
  // console.log("_id", _id);
  const handleAddToBasketClick = async () => {
    try {
      if (!token) {
        const redirectPath = location.pathname;
        localStorage.setItem("redirectPath", redirectPath);
        navigate("/login");
      } else {
        const pending = basket.filter((item) => item.status === "pending");
        console.log(pending);

        const orderId = cartEmpty[0]?._id;
        setOrder(orderId);
          const productExited = pending[0].productOrders.filter((item) => {
            // console.log(item);
            // console.log(
            //   "🚀 ~ productExited ~ item.productId === _id:",
            //   item.productId === _id
            // );
            return item.productId === _id;
          });
          // console.log(productExited);
          if (productExited.length > 0) {
            const data = {
              _id: productExited[0]._id,
              price: price + productExited[0].price,
              quantity: productExited[0].quantity + 1,
            };
            const response = await APIproductOrder.updateProductOrder(
              data,
              token
            );
            if (response?.data) {
              setUpdate(true);
            }
          } else {
            // console.log("🚀 ~ ProductItem ~ cartEmpty:", cartEmpty);

            const data = {
              productId: _id,
              quantity: 1,
              price: price,
              order: orderId,
            };
            // Gửi yêu cầu POST tới API endpoint để lưu "like" vào profile của người dùng
            const response = await APIproductOrder.postProductOrder(
              data,
              token
            ); // Thay đổi "product_id" bằng ID thực của sản phẩm
            // console.log(response.data); // In ra dữ liệu phản hồi từ server
            await dispatch({
              type: "ADD_PRODUCT_ORDER",
              payload: { productOrderId: response?.data?._id },
            });
            // setIsLiked(true); // Cập nhật trạng thái "like" thành đã được thực hiện
            setAddedToBasket(true);
          }
        }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (addedToBasket) {
      addToBasket(state.productOrders);
    } else if (update) {
      updateBasketItem(order);
      setOrder("");
    }
    setUpdate(false);
    setAddedToBasket(false);
  }, [
    order,
    updateBasketItem,
    update,
    addedToBasket,
    state.productOrders,
    addToBasket,
  ]);

  const urlDetail = `/product/${_id}`;

  return (
    <div className="card">
      <div style={{ height: "100%" }}>
        <Link to={urlDetail} style={{ height: "50%" }}>
          <div className="card-image">
            <img src={file} className="card-img-top" alt="..." />
          </div>
        </Link>
        <div className="card-body">
          <div
            style={{ display: "flex", flexDirection: "column", height: "auto" }}
          >
            <div style={{ textTransform: "uppercase" }}> {name}</div>
            <div>Rating</div>
            <div style={{ color: "#D20062" }}>{formatCurrency(price)}</div>
            <div>
              <strong>Đã bán:</strong> {size}
            </div>
          </div>
          <Link to={urlDetail} className="btn btn-primary">
            <h6 className="card-title">Xem sản phẩm</h6>
          </Link>
        </div>
      </div>
      <div
        className="button-group   "
        role="group"
        aria-label="Product Buttons"
      >
        {/* Thêm vào Giỏ hàng */}
        <button
          type="button"
          className="btn basket"
          onClick={handleAddToBasketClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-basket"
            viewBox="0 0 16 16"
          >
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
          </svg>
        </button>

        {/* Thêm vào danh sách Yêu thích */}
        <button type="button" className="btn heart">
          {isLiked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          )}
        </button>

        {/* Xem nhanh sản phẩm */}
        <button type="button" className="btn eye">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
          </svg>
        </button>

        {/* Thêm vào danh sách So sánh */}
        <button type="button" className="btn expand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrows-angle-expand"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
