import React from "react";
import { useProductView } from "./useProductView";

const ProductView = ({ addToBasket }) => {
  const {
    product,
    getImage,
    description,
    selectedColor,
    selectedSize,
    selectedQuantity,
    setSelectedColor,
    setSelectedSize,
    handleQuantityChange,
  } = useProductView();

  if (!product || !product.attributes) {
    return null;
  }

  const { attributes } = product;
  const quantity = Array.from(Array(Number(attributes.quantity)).keys());

  return (
    <div className="product-details container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="image-wrapper">
            <img
              className="img-fluid"
              src={`http://localhost:1337${getImage(selectedColor)}`}
              alt=""
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card-body">
            <h5 className="card-title">{attributes.name}</h5>
            <p className="card-text">{attributes.description}</p>
            <h6 className="card-subtitle mb-2 text-muted">
              <strong>Price: £{attributes.price}</strong>
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {attributes.quantity} items Left
            </h6>
            <div>
              <h6 className="card-subtitle">Sizes:</h6>
              <div className="sizes">
                {attributes.sizes.map((size) => (
                  <span
                    key={size.name}
                    className={`size-option ${
                      selectedSize === size.name ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size.name)}
                  >
                    {size.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h6 className="card-subtitle">Selected colour: {selectedColor}</h6>
              <div className="colours">
                {attributes.colours.map((colour) => (
                  <span
                    key={colour.name}
                    className={`colour-option ${
                      selectedColor === colour.name ? "active" : ""
                    }`}
                    onClick={() => setSelectedColor(colour.name)}
                  >
                    <img
                      className="img-thumbnail"
                      src={`http://localhost:1337${getImage(colour.name)}`}
                      alt={colour.name}
                    />
                  </span>
                ))}
              </div>
              <div className="form-group quantity">
                <label htmlFor="exampleSelect">Selected items</label>
                <select
                  value={selectedQuantity}
                  className="form-control"
                  name="quantity"
                  id="exampleSelect"
                  onChange={handleQuantityChange}
                >
                  {quantity.map((number) => (
                    <option key={number}>{number}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              className="btn btn-primary"
              onClick={() =>
                addToBasket({
                  ...product,
                  description,
                  size: selectedSize,
                  color: selectedColor,
                  quantity: selectedQuantity,
                  imageUrl: getImage(selectedColor),
                })
              }
            >
              Add to basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
