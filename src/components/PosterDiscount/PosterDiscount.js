import React from "react";
import { Link } from "react-router-dom";
import "./PosterDiscount.css"

const PosterDiscount = () => {
  return (
    <section className="poster-discount">
      <Link to="/discount">
        <img src="https://demo037058.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/7000-7100/30S-03-7058/banner.png&width=0" alt="" />
      </Link>
    </section>
  );
};

export default PosterDiscount;
