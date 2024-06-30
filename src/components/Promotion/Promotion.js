import React from "react";
import "./Promotion.css"

const PromotionSection = () => {
  return (
    <section id="promotion-section" className="py-5 w-100">
      <div className="row">
        <div className="col-md-4">
          <a href="https://demo037058.web30s.vn/san-pham">
            <img
              src="https://demo037058.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/7000-7100/30S-03-7058/1%20(1).png&width=0"
              className="img-fluid"
              alt="BMarket"
            />
          </a>
        </div>
        <div className="col-md-4 w-40 m-auto ">
          <div className="promotion-content text-center">
            <div className="d-flex"><h2 className="mb-3">Khuyến Mãi</h2>
            <h3 className="mb-4">giảm 30%</h3></div>
            <p>
              Các sản phẩm đồ linh phụ kiện điện tử. Thời gian áp dụng có hạn,
              nhanh tay chọn mua những sản phẩm tốt nhất
            </p>
            <a href="https://demo037058.web30s.vn/san-pham" className="btn btn-primary">Xem ngay</a>
          </div>
        </div>
        <div className="col-md-4">
          <a href="https://demo037058.web30s.vn/san-pham">
            <img
              src="https://demo037058.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/7000-7100/30S-03-7058/2.png&width=0"
              className="img-fluid"
              alt="BMarket"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
