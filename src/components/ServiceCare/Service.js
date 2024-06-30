import React from "react";
import "./Service.css"
import { Link } from "react-router-dom";
import PathDirect from "../PathDirect/PathDirect";

const Service = () => {
    const initial = [{
        name:"gói quà tặng",
    },
    {
        name:"dịch vụ bảo hành",
    },
    {
        name:"tư vấn sản phẩm",
    },
    {
        name:"đặt hàng nước ngoài",
    },
    {
        name:"dịch vụ giao hàng có phí cod",
    }]
  return (
    <div className="h-auto">
    <PathDirect name="dịch vụ"/>
      <section className="service">
        <div className="service-items">
          {initial.map((item)=>{return <div className="service-item">
            <div className="service-image">
              <Link to="/detail-service">
                <img
                  src="https://demo037058.web30s.vn/datafiles/32952/upload/images/news/service-3.jpeg?t=1626317882"
                  alt=""
                />
              </Link>
            </div>
            <div className="service-content">
              <>
                <h2>
                  <Link>{item.name} </Link>
                </h2>
                <div className="content">
                  dịch vụ đóng gói sản phẩm với nhứng mẫu gói sản phẩm , hộp đa
                  dạng đầy 
                </div>
              </>
            </div>
          </div>})}
        </div>
      </section>
    </div>
  );
};

export default Service;
