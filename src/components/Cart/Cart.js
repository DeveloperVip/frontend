import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="cart-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <FaShoppingCart className="cart-icon" style={{ width: "20px" }} />
      
      {isHovered && (
        <div className="cart-options">
          <div className="total">Total: $50</div>
          <button className="checkout-btn" onClick={() => console.log("Checkout clicked")}>Thanh toán</button>
          <button className="view-cart-btn" onClick={() => navigate("/basket")}>Xem đơn hàng</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
