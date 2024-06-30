import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import APIOrder from "../services/productOrder/APIorder.service";
import { useNavigate } from "react-router-dom";
import APIproductOrder from "../services/productOrder/APIproductOrder";
import { orderSuccessfulProvider } from "../Providers/OrderSuccessfulProvider";
import { useRecoilState } from "recoil";

const useBasket = (token) => {
  console.log("here");
  const [ordersuccesscont, setordersuccesscont] = useRecoilState(
    orderSuccessfulProvider
  );
  const [basket, setBasket] = useState([]);
  const [updateBasket, setUpdateBasket] = useState(false);
  const { search } = window.location;

  //   useEffect(() => {
  //     if (!!token) {
  //       if (getQuery("success", search) === "true") {
  //         const deleteBasket = async () => {
  //           try {
  //             await axios.delete(`http://localhost:1337/api/baskets/fakeId`, {
  //               headers: {
  //                 Authorization: `bearer ${token}`,
  //               },
  //             });
  //             toast.success(
  //               "Order placed! You will receive an email confirmation.",
  //               {
  //                 hideProgressBar: true,
  //               }
  //             );
  //           } catch (error) {
  //             console.log({ error });
  //           }
  //         };
  //         deleteBasket();
  //       }
  //     }
  //     if (!token) {
  //       if (getQuery("success", search) === "true") {
  //         toast.success("Order placed! You will receive an email confirmation.", {
  //           hideProgressBar: true,
  //         });
  //         setBasket([]);
  //       }
  //     }
  //     if (getQuery("cancel", search) === "true") {
  //       toast.error("Payment is canceled!", {
  //         hideProgressBar: true,
  //       });
  //     }
  //   }, [search, token]);

  useEffect(() => {
    if (!token) {
      setBasket([]);
    } else if (!!token) {
      const getBasketData = async (token) => {
        try {
          const data = await APIOrder.getOrder(token);
          console.log(data);
          if (!data||data.length === 0) {
            console.log("ở đây");
            const productOrders = [];
            const cartEmpty = await APIOrder.postOrder(productOrders, token);
            setUpdateBasket(false);
            setBasket(cartEmpty.data);
          } else {
            console.log("ở đây này");
            const pending = await data.filter(
              (item) => item.status === "pending"
            );
            if (!pending) {
              const productOrders = [];
              const cartEmpty = await APIOrder.postOrder(productOrders, token);
              setUpdateBasket(false);
              setBasket(cartEmpty.data);
            } else {
              setUpdateBasket(false);
              setBasket(data);
            }
          }
        } catch (error) {
          console.log({ error });
        }
      };
      getBasketData(token);
    }
  }, [token, updateBasket,ordersuccesscont]);

  const addToBasket = async (props) => {
    const products = [];
    console.log("here 1");
    await props.map(async (po) => {
      const { productOrderId } = po;
      console.log("🚀 ~ addToBasket ~ state:", po);
      console.log(basket);
      const isSameProductExistinBasket = basket[0]?.productOrders?.filter(
        (product) => {
          console.log(product._id);
          console.log("🚀 ~ awaitprops.map ~ productOrderId:", productOrderId)
          return product._id === productOrderId;
        }
      );
      console.log(
        "🚀 ~ awaitprops.map ~ isSameProductExistinBasket:",
        isSameProductExistinBasket
      );

      if (
        isSameProductExistinBasket === undefined ||
        !isSameProductExistinBasket.length
      ) {
        products.push(po);
      } else {
        toast.error("Same product added to the basket already!", {
          hideProgressBar: true,
        });
      }
    });
    try {
      if (!!token) {
        await APIOrder.postOrder(products, token);
        setUpdateBasket(true);
      }
      // else {
      //   setBasket([
      //     ...basket,
      //     {
      //       name,
      //       price,
      //       color,
      //       size,
      //       sizes,
      //       imageUrl,
      //       quantities,
      //       description,
      //       productId: id,
      //       quantity: Number(quantity),
      //       categoryId: category.data.id,
      //     },
      //   ]);
      // }

      toast.success("Added to the basket successfully!", {
        hideProgressBar: true,
      });
    } catch (error) {
      console.log({ error });
    }
  };

  const updateBasketItem = async (orderId) => {
    try {
      if (!!token) {
        await APIOrder.updateOrder(orderId);
        // await axios.put(
        //   `http://localhost:1337/api/baskets/${basketItemId}`,
        //   {
        //     data: {
        //       color,
        //       size,
        //       imageUrl,
        //       quantity: Number(quantity),
        //     },
        //   },
        //   {
        //     headers: {
        //       Authorization: `bearer ${token}`,
        //     },
        //   }
        // );
        setUpdateBasket(true);
      }
      // } else {
      //   const updatedBasket = basket.map((item, idx) => {
      //     if (index === idx && productId === item.productId) {
      //       return {
      //         ...item,
      //         color,
      //         size,
      //         imageUrl,
      //         quantity: Number(quantity),
      //       };
      //     }
      //     return item;
      //   });
      //   setBasket(updatedBasket);
      // }
    } catch (error) {
      console.log({ error });
    }
  };

  const removeFromBasket = async ({ orderId, productOrderId }) => {
    try {
      if (!!token) {
        await APIproductOrder.deleteProductOrder(orderId,productOrderId);
        setUpdateBasket(true);
      }
      // else {
      //   const basketAfterRemovedItem = basket.filter(
      //     (item, idx) =>
      //       (item.productId !== productId && index !== idx) ||
      //       (item.productId === productId && index !== idx)
      //   );

      //   setBasket(basketAfterRemovedItem);
      // }
    } catch (error) {
      console.log("Remove item error", { error });
    }
  };

  return { basket, addToBasket, updateBasketItem, removeFromBasket };
};

export default useBasket;
