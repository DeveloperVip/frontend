import React, { createContext, useContext, useReducer } from 'react';

const ProductOrderContext = createContext();

const initialState = {
  productOrders: [],
};


const productOrderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_ORDER':
      return {
        ...state,
        productOrders: [...state.productOrders, action.payload],
      };
    case 'REMOVE_PRODUCT_ORDER':
      return {
        ...state,
        productOrders: state.productOrders.filter(
          (po) => po.productId !== action.payload
        ),
      };
    case 'CLEAR_PRODUCT_ORDERS':
      return initialState;
    default:
      return state;
  }
};

export const ProductOrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productOrderReducer, initialState);
  console.log(state.productOrders);
  return (
    <ProductOrderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductOrderContext.Provider>
  );
};

export const useProductOrder = () => useContext(ProductOrderContext);
