import React, { useEffect, useState } from "react";
import { useProductOrder } from "../../../context/ProductOrderContext";
import APIproductOrder from "../../../services/productOrder/APIproductOrder";

const CustomCard = ({
  _id,
  order,
  name,
  price,
  file,
  additionalImages,
  color,
  sizeOfString,
  sizeOfNumber,
  internalMemory,
  material,
  publicId,
  size,
  category_id,
  categoryDetail_id,
  brand,
  description,
  commentId,
  productOrderId,
  index,
  quantities,
  removeFromBasket,
  updateBasketItem,
}) => {
  console.log("num", _id, productOrderId, order);
  const token = localStorage.getItem("token_user");
  const { state, dispatch } = useProductOrder();
  const [quantity, setQuantity] = useState(quantities);
  const handleClick = (e) => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        switch (e.target.name) {
          case "decrease":
            return prevQuantity - 1;
          case "increase":
            return prevQuantity + 1;
          default:
            return prevQuantity;
        }
      });
    } else if (quantity === 1) {
      setQuantity((prevQuantity) => {
        switch (e.target.name) {
          case "decrease":
            return prevQuantity;
          case "increase":
            return prevQuantity + 1;
          default:
            return prevQuantity;
        }
      });
    } else {
      setQuantity(0);
    }
  };
  const handleUpdateBasket = async (prevQuantity) => {
    const data = {
      _id: productOrderId,
      price: price * prevQuantity,
      quantity: prevQuantity,
    };
    console.log("🚀 ~ handleUpdateBasket ~ data:", data)
    const response = await APIproductOrder.updateProductOrder(data, token);
    console.log("🚀 ~ handleUpdateBasket ~ response:", response)
    if (response) await updateBasketItem(order);
  };
  useEffect(() => {
    handleUpdateBasket(quantity);
  }, [quantity]);
  console.log(
    order,
    _id,
    name,
    price,
    color,
    file,
    sizeOfNumber,
    internalMemory
  );
  const quantitiesArray = quantities;

  return (
    <div className="card product-card" style={{ height: "100%" }}>
      <div className="card-image">
        <img className="card-img-top" src={file} alt={name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div
          className="card-subtitle mb-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="form-group size"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <label htmlFor={`sizeSelect-${_id}`}>Kích cỡ</label>
            <select
              className="form-control form-control-sm"
              value={size}
              id={`sizeSelect-${_id}`}
              onChange={({ target: { value } }) => {
                if (value) {
                  updateBasketItem({
                    index,
                    color,
                    size: value,
                    file,
                    productOrderId,
                    quantities,
                  });
                }
              }}
            >
              <option>{sizeOfString || sizeOfNumber || internalMemory}</option>
              {/* {sizeOfString?.map((size) => (
                <option key={size.name}>{size.name}</option>
              ))}
              {sizeOfNumber?.map((size) => (
                <option key={size.name}>{size.name}</option>
              ))}
              {internalMemory?.map((size) => (
                <option key={size.name}>{size.name}</option>
              ))} */}
            </select>
          </div>
        </div>
        <div
          className="card-subtitle mb-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="form-group quantity"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "auto",
            }}
          >
            <label htmlFor={`quantitySelect-${_id}`}>Số lượng</label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "auto",
              }}
            >
              <span>
                <button
                  style={{
                    width: "fit-content",
                    padding: "5px 13px",
                    border: "none",
                  }}
                  onClick={handleClick}
                  name="decrease"
                >
                  -
                </button>
              </span>
              <span style={{ margin: "20px" }}>{quantity}</span>
              <span>
                <button
                  style={{
                    width: "fit-content",
                    padding: "5px 13px",
                    border: "none",
                  }}
                  onClick={handleClick}
                  name="increase"
                >
                  +
                </button>
              </span>
            </div>
            {/* <input
              className="form-control form-control-sm"
              value={quantities}
              id={`quantitySelect-${_id}`}
              onChange={({ target: { value } }) => {
                if (value) {
                  updateBasketItem({
                    index,
                    color,
                    size,
                    file,
                    productId,
                    quantity: Number(value),
                  });
                }
              }}
            /> */}
          </div>
        </div>
        <div className="card-subtitle mb-2">
          <strong>Giá:</strong> {price} VND
        </div>
        <button
          className="btn btn-danger btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            removeFromBasket({
              orderId: order,
              productOrderId: productOrderId,
              // productId,
              // price,
              // color,
              // index,
              // quantities,
            });
          }}
        >
          Xóa bỏ
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
