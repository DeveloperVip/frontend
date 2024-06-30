import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header.js";
import Carousel from "./components/Swiper/Carousel.js";
import Footer from "./components/Footer/Footer.js";
import BackToTopButton from "./components/ScrollTop/ScrollTop.js";
import Product from "./pages/Product/Product.js";
import Introduct from "./pages/Introduct/Introduct.js";
import Service from "./components/ServiceCare/Service.js";
import BookService from "./components/ServiceCare/ServiceDetail/ServiceDetail.js";
import Video from "./components/Libruary/Video.js";
import Image from "./components/Libruary/Image.js";
import ContactPage from "./pages/Contact/Contact.js";
import SellerPage from "./pages/SellerPage/SellerPage.js";
import UserProfile from "./pages/User/UserProfile.js";
import Libruary from "./pages/Library/Library.js";
import ProductItem from "./components/ProductItem/ProductItem.js";
import DetailProduct from "./components/ProductDetail/ProductDetail.js";
import { ProductOrderProvider } from "./context/ProductOrderContext.js";
import Basket from "./pages/Payment/Basket/index.js";
import useBasket from "./hook/useBasket.js";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token_user"));
  const product = {name:"duong"}
  const { basket, addToBasket, updateBasketItem, removeFromBasket } = useBasket(token);
  console.log("🚀 ~ App ~ basket:", basket)
  useEffect(() => {
    // Giám sát sự thay đổi của token trong localStorage
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token_user"));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [token]);
  return (
    <div className="App">
      <BrowserRouter>
        <ProductOrderProvider>
          <Header setToken={setToken} />
          <Routes>
            {/* <Route path="" element={<Header setToken={setToken}/>} /> */}
            <Route
              path="/login"
              element={
                <div className="page-login">
                  <Login setToken={setToken}/>
                </div>
              }
            />{" "}
            <Route
              path="/product/:productitem"
              element={
                <DetailProduct product={product} addToBasket={addToBasket} />
              }
            ></Route>
            <Route path="/home" element={<Home />} />
            <Route path="/introduct" element={<Introduct />} />
            <Route path="/user/:activepage" element={<UserProfile />} />
            <Route
              path="/product"
              element={<Product basket={basket} addToBasket={addToBasket} updateBasketItem = {updateBasketItem}/>}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/service" element={<Service />} />
            <Route path="/detail-service" element={<BookService />} />
            <Route path="/library" element={<Libruary />} />
            <Route path="/library/:param" element={<Libruary />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/seller" element={<SellerPage />} />
            <Route
              path="/basket"
              element={
                <Basket
                  token={token}
                  basket={basket}
                  updateBasketItem={updateBasketItem}
                  removeFromBasket={removeFromBasket}
                />
              }
            />
          </Routes>

          <div style={{ height: "auto" }}>
            <Footer />
          </div>
          <BackToTopButton />
        </ProductOrderProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
