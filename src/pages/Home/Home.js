import Discount from "../../components/Discount/Discount";
import Footer from "../../components/Footer/Footer";
import GivePromotion from "../../components/GivePromotion/GivePromotion";
import Header from "../../components/Header/Header";
import News from "../../components/News/News";
import PosterDiscount from "../../components/PosterDiscount/PosterDiscount";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductMain from "../../components/ProductMain/ProductMain";
import PromotionSection from "../../components/Promotion/Promotion";
import BackToTopButton from "../../components/ScrollTop/ScrollTop";
import SellingProduct from "../../components/SellingProduct/SellingProduct";
import Carousel from "../../components/Swiper/Carousel";
import "./Home.css"
const Home =()=>{
    return <div className="home">
        <Carousel/>
        <ProductMain/>
        <PromotionSection/>
        <SellingProduct />
        <Discount/>
        <SellingProduct/>
        <PosterDiscount/>
        <News/>
        <GivePromotion/>
    </div>
}

export default Home;