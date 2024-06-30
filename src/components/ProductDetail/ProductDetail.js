import React, { useState } from "react";
import "./ProductDetail.css";
import { useParams, Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import useFetchProductById from "../../hook/fetchApiProductById";
import formatCurrency from "../../utils/FormatCurrency";

const DetailProduct = () => {
  const idDetail = useParams();
  console.log("🚀 ~ DetailProduct ~ idDetail:", idDetail.productitem);
  const { data: product, loading } = useFetchProductById(idDetail);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); // State để lưu ảnh được chọn

  const handleClickImage = (image) => {
    console.log(image);
    setSelectedImage(image); // Cập nhật ảnh được chọn vào state khi click vào ảnh
  };

  const handleClick = (e) => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        switch (e.target.name) {
          case "decrease":
            return prevQuantity - 1;
          case "increase":
            return prevQuantity + 1;
          default:
            return prevQuantity;
        }
      });
    } else if (quantity === 1) {
      setQuantity((prevQuantity) => {
        switch (e.target.name) {
          case "decrease":
            return prevQuantity;
          case "increase":
            return prevQuantity + 1;
          default:
            return prevQuantity;
        }
      });
    } else {
      setQuantity(0);
    }
  };

  const nextSlide = () => {
    if (product.additionalImages) {
      if (product.additionalImages.length - currentSlide > 5) {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  const prevSlide = () => {
    if (product.additionalImages) {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments((prevComments) => [...prevComments, comment]);
      setComment("");
    }
  };

  return (
    <div className="container h-auto mt-4 product-detail">
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={{ padding: "20px" }}>
            <img src={product.file} alt="" />
          </div>
          <div className="card">
            <div className="slider">
              <div
                style={{
                  width: "calc(100% - 31.72px * 2)",
                  margin: "0px auto",
                  overflow: "hidden",
                }}
              >
                <div
                  className="slides"
                  style={{
                    transform: `translate3d(${-95.8 * currentSlide}px,0px,0px)`,
                  }}
                >
                  {product.additionalImages
                    ? product.additionalImages.map((image, index) => (
                        <div
                          key={index}
                          className="slide-item "
                          onClick={() => handleClickImage(image)} // Gọi hàm xử lý khi click vào ảnh
                        >
                          <img src={image} alt={`Product ${index + 1}`} />
                        </div>
                      ))
                    : null}
                </div>
              </div>
              {product.additionalImages ? (
                product.additionalImages.length > 5 ? (
                  <>
                    <button onClick={prevSlide} className="prev-img">
                      &#10094;
                    </button>
                    <button onClick={nextSlide} className="next-img">
                      &#10095;
                    </button>
                  </>
                ) : (
                  ""
                )
              ) : null}
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="card">
            <div className="card-body">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                  gap: "15px",
                  margin: "10px 0px",
                }}
              >
                <div style={{ textTransform: "uppercase", fontSize: "25px" }}>
                  <strong>{product.name}</strong>
                </div>
                <div>Rating</div>
                <div
                  style={{
                    fontSize: "24px",
                    lineHeight: "30px",
                    color: "var(--c-1625122083964, #292929)",
                    fontWeight: "600",
                  }}
                >
                  Giá:
                  <span
                    style={{ color: "#D20062", margin: "0px 0px 0px 10px" }}
                  >
                    {formatCurrency(product.price)}
                  </span>
                </div>
                {product.color ? (
                  <div>
                    <strong>Màu sắc:</strong> {product.color.name}
                    <div
                      style={{
                        height: "30px",
                        width: "30px",
                        backgroundColor: product.color.value,
                      }}
                    ></div>
                  </div>
                ) : null}

                {product.internalMemory ? (
                  <div>Bộ nhớ trong: {product.internalMemory}</div>
                ) : (
                  ""
                )}
                {product.material ? (
                  <div>Chất liệu: {product.material}</div>
                ) : (
                  ""
                )}
                {product.sizeOfString && product.sizeOfNumber ? (
                  <>
                    <div>Kích cỡ theo số: {product.sizeOfNumber}</div>
                    <div>Kích cỡ theo chữ: {product.sizeOfString}</div>
                  </>
                ) : (
                  ""
                )}
                <div>
                  <strong>Đã bán:</strong> {product.size}
                </div>
                <div>
                  <strong>Thương hiệu:</strong> {product.brand?product.brand:"không"}
                </div>
                <div>
                  <strong>Khuyến mãi:</strong>
                </div>
                <span className="d-flex">
                  <div>
                    <strong>Số lượng mua :</strong>
                  </div>
                  <div>
                    <span>
                      <button
                        style={{
                          width: "fit-content",
                          padding: "5px 13px",
                          border: "none",
                        }}
                        onClick={handleClick}
                        name="decrease"
                      >
                        -
                      </button>
                    </span>
                    <span style={{ margin: "20px" }}>{quantity}</span>
                    <span>
                      <button
                        style={{
                          width: "fit-content",
                          padding: "5px 13px",
                          border: "none",
                        }}
                        onClick={handleClick}
                        name="increase"
                      >
                        +
                      </button>
                    </span>
                  </div>
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Link
                  to=""
                  className="btn btn-warning"
                  style={{ color: "white" }}
                >
                  <h6 className="card-title">Mua ngay</h6>
                </Link>
                <Link to="" className="btn btn-primary">
                  <h6 className="card-title">Thêm vào giỏ hàng</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h4>Lượt like: </h4>
              <h4>Lượt mua: </h4>
              <p>
                Thông tin về sản phẩm: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quos eos aut, eveniet fugit impedit aperiam
                recusandae deserunt saepe placeat odio quam sit dolor iusto
                consectetur voluptatem sunt enim. Vitae, unde!
              </p>
              <h5 className="card-title">Bình luận</h5>
              <ul className="list-group list-group-flush">
                {comments.map((comment, index) => (
                  <li key={index} className="list-group-item">
                    {comment}
                  </li>
                ))}
              </ul>
              <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Để lại bình luận
                  </label>
                  <textarea
                    id="comment"
                    className="form-control"
                    rows="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Gửi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Hiển thị modal/lightbox khi có ảnh được chọn */}
      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
