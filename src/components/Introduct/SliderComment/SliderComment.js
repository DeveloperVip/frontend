import React from "react";
import "./SliderComment.css";

const SliderComment = () => {
  const initial = [
    {
      src: "https://demo037058.web30s.vn/datafiles/32952/upload/images/DienThoai/kh-2.jpg?t=1626775885",
      comment:
        "Giá tiền sản phẩm và chất lượng luôn được dảm bảo. Là địa chỉ uy tín khi mua các sản phẩm nội thất và công nghe.",
      name: "Hoàng My",
    },
    {
      src: "https://demo037058.web30s.vn/datafiles/32952/upload/images/DienThoai/kh-1.jpg?t=1626775721",
      comment:
        "Giá tiền sản phẩm và chất lượng luôn được dảm bảo. Là địa chỉ uy tín khi mua các sản phẩm nội thất và công nghe.",
      name: "Hoàng My",
    },
    {
      src: "https://demo037058.web30s.vn/datafiles/32952/upload/images/DienThoai/kh-2.jpg?t=1626775885",
      comment:
        "Giá tiền sản phẩm và chất lượng luôn được dảm bảo. Là địa chỉ uy tín khi mua các sản phẩm nội thất và công nghe.",
      name: "Hoàng My",
    },
  ];
  return (
    <div className="slider-comment">
        <h3 className="h-auto text-center">Khách hàng nhận xét</h3>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          {
        initial.map((item)=>{return(
            <div className={`carousel-item ${item===initial[0]?"active":""} `}>
      <div className='img-item'>
      <img src={item.src} className="d-block w-100" alt="..." />
      </div>
      <div class="carousel-caption ">
        <h5>{item.name}</h5>
        <p>{item.comment}</p>
      </div>
    </div>
        )})
    }
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon bg-secondary" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bg-secondary" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SliderComment;
