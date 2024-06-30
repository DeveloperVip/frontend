import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
  <div className="container">
    <div className="footer-top">
      <div className="row">
        <div className="col-md-6 col-lg-3 about-footer">
        <Logo/>
          <ul>
            <li><a href="tel:(010) 1234 4321">
                <i className="fa fa-phone fa-flip-horizontal" />(010) 1234 4321</a></li>
            <li>
              <i className="fa fa-map-marker" />
              1 / 105 Bay Lights,
              <br />Lorem Ipsum,
              <br />LIC 3201
            </li>
            <li className="contact" style={{padding:"0px"}}>
            <Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></Link>
<Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg></Link>
<Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></Link>
<Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></Link>
            </li>
          </ul>
          <a href className="btn red-btn">Book Now</a>
        </div>
        <div className="col-md-6 col-lg-2 page-more-info">
          <div className="footer-title">
            <h4>Sản phẩm</h4>
          </div>
          <ul>
            <li><a href="#">Đồ điện tử</a></li>
            <li><a href="#">Nội thất</a></li>
            <li><a href="#">Thời trang</a></li>
            <li><a href="#">Thiết bị khác</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 page-more-info">
          <div className="footer-title">
            <h4>Chính sách</h4>
          </div>
          <ul>
            <li><a href="#">Đổi trả</a></li>
            <li><a href="#">Thanh toán</a></li>
            <li><a href="#">Giao hàng </a></li>
            <li><a href="#">Bảo hành</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4 open-hours">
          <div className="footer-title">
            <h4>Thời gian mở cửa</h4>
            <ul className="footer-social">
              <li><a href target="_blank"><i className="fa fa-facebook-f" /></a></li>
              <li><a href target="_blank"><i className="fa fa-instagram" /></a></li>
              <li><a href target="_blank"><i className="fa fa-linkedin-in" /></a></li>
            </ul>
          </div>
          <table className="table" style={{color: '#fff'}}>
            <tbody>
              <tr>
                <td><i className="fa fa-clock-o" />Monday Thursday</td>
                <td>9:00am - 5:00pm</td>
              </tr>
              <tr>
                <td><i className="fa fa-clock-o" />Friday</td>
                <td>9:00am - 4:00pm</td>
              </tr>
              <tr>
                <td><i className="fa fa-clock-o" />Sturday</td>
                <td>9:00am - 1:30pm</td>
              </tr>
              <tr>
                <td><i className="fa fa-clock-o" />Sunday</td>
                <td>9:30am - 12:00pm</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="footer-logo">
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="footer-bottom">
      <div className="row">
        <div className="col-sm-4">
          <a href>Privacy policy</a>
        </div>
        <div className="col-sm-8">
          <p>Lorem ipsum dolor sit amet @ 2019 All rights reserved</p>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
