import axios from "axios";

const ApiProduct = {
  getAllProduct: () => {
    return axios
      .get("http://localhost:8000/product/")
      .then((response) => response.data)
      .catch((error) => {
        // Xử lý lỗi khi gọi API
        console.error("Error fetching products:", error);
      });
  },
  getProductById: (id) => {
    console.log(id);
    const url = `http://localhost:8000/product/${id}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => {
        console.error("error");
      });
  },
};

export default ApiProduct;
