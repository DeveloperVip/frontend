import React from "react";
import { Link } from "react-router-dom";
import "./News.css";

const News = () => {
  return (
    <section className="news">
      <div>
        <h2>
          <strong>Tin tức cập nhập</strong>
        </h2>
      </div>
      <div className="news-items">
        <div className="news-item">
          <div className="news-image"><Link to="">
            <img
              src="https://demo037058.web30s.vn/datafiles/32952/upload/thumb_images/news/chu-phuong-linh-9x-so-huu-thuong-hieu-thoi-trang-nu-noi-tieng-3.jpg?t=1626859793"
              alt=""
            />
          </Link></div>
          <div className="news-content">
            <>
              <h2><Link>Nữ chính 'Bridgerton' làm mẫu thời trang nổi bật trong phim bom tấn</Link></h2>
              <div className="content">Phoebe Dynevor - nữ chính phim "Bridgerton" - làm mẫu với váy áo tôn hình thể.</div>
              <div className="time">
                  <div className="day"><span></span><span></span></div>
                  <div className="view"><span></span><span></span></div>
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
