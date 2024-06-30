import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomCard from "./Card";
import { useProductOrder } from "../../../context/ProductOrderContext";
import APIproductOrder from "../../../services/productOrder/APIproductOrder";
import formatCurrency from "../../../utils/FormatCurrency";
import Cart from "../Checkout/Cart";
// import Checkout from "../checkout";

const Basket = ({ basket, token, updateBasketItem, removeFromBasket }) => {
  const [pending, setPending] = useState();
  const { state, dispatch } = useProductOrder();
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log(basket);
        const orderId = basket?.filter((item) => {
          return item.status === "pending";
        })[0];
        const productOrders =
          orderId?.productOrders || [];
          console.log("🚀 ~ fetchProductDetails ~ productOrders:", productOrders)
        const detailsPromises = productOrders.map((product) =>
          APIproductOrder.getProductOrderById(product._id)
        );
        const details = await Promise.all(detailsPromises);
        console.log("🚀 ~ fetchProductDetails ~ details:", details);
        setProductDetails(details);
        setPending(orderId)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (basket.length > 0) {
      fetchProductDetails();
    } else {
      setLoading(false);
    }
  }, [basket]);

  const navigateToProductView = (url) => {
    navigate(url);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const totalPrice = basket.reduce((acc, value) => {
  //   const itemPrice = Number(value.price) * Number(value.quantity);
  //   return acc + itemPrice;
  // }, 0);

  return (
    <>
      <div className="basket container" style={{ height: "auto" }}>
        {(!basket.length && !state?.productOrders?.length) ||
        !basket[0]?.productOrders?.length ? (
          <div className="empty-basket text-center" style={{ height: "auto" }}>
            <h3>Basket is empty</h3>
            <button
              className="btn btn-info"
              onClick={() => {
                navigate("/product");
              }}
            >
              Go Shopping
            </button>
          </div>
        ) : null}
        {console.log("eeeeeee", basket[0])}
        {basket.length ? (
          !(basket[0]?.totalPrice === 0) ? (
            <h3>
              Tổng tiền đơn hàng phải thanh toán:{" "}
              {formatCurrency(basket[0].totalPrice)}
            </h3>
          ) : null
        ) : null}
        <div className="row">
          {productDetails.map((product, idx) => {
            // const data = await APIproductOrder.getProductOrderById(product._id)
            // console.log("🚀 ~ {basket[0]?.productOrders?.map ~ data:", data)
            console.log(product);
            return (
              <div
                className="col-sm-12 col-md-3"
                style={{ height: "600px", margin: "20px auto" }}
                key={`${idx}${product._id}`}
                // onClick={() =>
                //   navigateToProductView(
                //     `/product-details/${product.productId}?color=${product.color}&size=${product.size}`
                //   )
                // }
              >
                <CustomCard
                  {...{
                    ...product.productId,
                    productOrderId: product._id,
                    order: product.order,
                    index: idx,
                    quantities: product.quantity,
                    updateBasketItem,
                    removeFromBasket,
                  }}
                />
              </div>
            );
          })}
        </div>
        {productDetails ? <Cart products={productDetails} pending = {pending?._id} token={token} status = {pending?.status}/> : null}
      </div>
    </>
  );
};

export default Basket;
