import { Link } from "react-router-dom";
import LanguageSwitcher from "../Language/Language";
import NavItem from "../NavItem/NavItem";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { useEffect, useState } from "react";
const Header = ({setToken}) => {
  const [state, setState] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 122) {
      setState(true);
    } else {
      setState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        style={{top : state ? "0px" : "",
      position: state ? "fixed" : ""}}
        className="nav-bar"
      >
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand w-auto" to="/home">
              <strong>
                <h3>Hmarket</h3>
              </strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-3">
                <NavItem name="Trang chủ" url="/home" />
                <NavItem name="Giới thiệu" url="/introduct" />
                <NavItem name="Sản phẩm" url="/product" subName={["Đồ điện tử","Nội thất", "Thời trang", "Thiết bị khác"]}/>
                <NavItem name="Dịch vụ" url="/service" subName={["Khách hàng","Đơn hàng"]}/>
                <NavItem name="Thư viện" url="/library" subName={["Video","Hình ảnh"]} subLink = {["video","image"]}/>
                <NavItem name="Liên hệ" url="/contact" />
              </ul>
              <SearchBar setToken={setToken} />
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default Header;
