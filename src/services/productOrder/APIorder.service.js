import axios from "axios";
import ApiProduct from "../APIproductService";

const APIOrder = {
  postOrder: (productOrders, token) => {
    console.log(productOrders, token);
    return axios
      .post(
        "http://localhost:8000/order/create",
        { productOrders: productOrders },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
  postOrderNew: ( token) => {
    console.log( token);
    return axios
      .post(
        "http://localhost:8000/order/create-new-order",
        {status:"pending"},
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
  getOrder: (token) => {
    return axios
      .get("http://localhost:8000/order/getOrder", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
  updateOrder: (orderId) => {
    return axios
      .put(`http://localhost:8000/order/update/${orderId}`)
      .then((res) => {
        console.log(res.data);
        return res;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
  updateInfoOrder: (orderId,data) => {
    return axios
      .put(`http://localhost:8000/order/updateInfoOrder/${orderId}`,data)
      .then((res) => {
        console.log(res.data);
        return res;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
  updateStatusOrder: (orderId,data) => {
    console.log(data);
    return axios
      .put(`http://localhost:8000/order/update-status-delivery/${orderId}`,{status:data})
      .then((res) => {
        console.log(res.data);
        return res;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
  deleteOrder: (orderId,productOrderId) => {
    console.log(orderId,productOrderId);
    const data = {productOrderId}
    return axios
      .delete(`http://localhost:8000/order/delete/${orderId}`,data)
      .then((res) => {
        console.log(res.data);
        return res;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
};

export default APIOrder;
