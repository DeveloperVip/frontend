import axios from "axios";
import ApiProduct from "../APIproductService";

const APIproductOrder = {
  postProductOrder: (data, token) => {
    console.log(data, token);
    return axios
      .post("http://localhost:8000/product-order/create", data, {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
  updateProductOrder: (data, token) => {
    console.log(data, token);
    return axios
      .put("http://localhost:8000/product-order/update", data, {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
  deleteProductOrder: (orderId,productOrderId) => {
    console.log(orderId,productOrderId);
    return axios
      .delete(`http://localhost:8000/product-order/delete/${productOrderId}`,{
        data: { orderId: orderId }
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
  getProductOrderById: (id) => {
    return axios
      .get(`http://localhost:8000/product-order/get-product-order-by-id/${id}`)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
};

export default APIproductOrder;
