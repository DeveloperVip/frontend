import React, { useRef, useState } from "react";
import "./SellingProduct.css";
import ProductItem from "../ProductItem/ProductItem";
import { useEffect } from "react";
import axios from "axios";

const SellingProduct = () => {
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
  const slideTrackRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const handleEnter = () => {
    setIsAnimating(false);
  };
  const handleLeave = () => {
    setIsAnimating(true);
    setPosition(0);
  };
  const prevSlide = () => {
    const newPosition = position - 1 < 0 ? 0 : position - 1;
    setPosition(newPosition);
  };

  const nextSlide = () => {
    const newPosition =
      position + 4 >= slideTrackRef.current.children.length
        ? position
        : position + 1;
    setPosition(newPosition);
  };

  return (
    <section
      className="selling-product"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <h2>SẢN PHẨM BÁN CHẠY</h2>
      <div className="slider">
        <button className="prev-btn" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg>
        </button>
        <div
          className="slide-track"
          ref={slideTrackRef}
          style={{
            animationPlayState: isAnimating ? "running" : "paused",
            animation: isAnimating
              ? "scroll 40s linear infinite"
              : "none",
            transform: `translateX(${-250 * position}px)`,
            transitionDuration:"1s",
          }}
        >
          {products.map((item)=>{return <div className="slide">
            <ProductItem products={item}/>
          </div>
          })}
          {products.map((item)=>{return <div className="slide">
            <ProductItem products={item}/>
          </div>
          })}{products.map((item)=>{return <div className="slide">
          <ProductItem products={item}/>
        </div>
        })}
        </div>
        <button className="next-btn" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
        </button>
      </div>
    </section>
  );
};

export default SellingProduct;
