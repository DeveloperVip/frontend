// GivePromotion.js
import React, { useState } from "react";
import "./GivePromotion.css";

const GivePromotion = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className="give-promotion">
        <div className="form container">
        <form className="email-input-container">
      <input
        type="email"
        placeholder="Nhập địa chỉ email của bạn..."
        value={email}
        onChange={handleChange}
        className="email-input"
      />
      <button className="submit-button"><><strong>đăng ký nhận tin khuyến mại</strong></></button>
    </form>
        </div>
    </section>
  );
};

export default GivePromotion;
