import axios from "axios";

const APIprofile = {
  getProfile: (token) => {
    return axios
      .get(`http://localhost:8000/profile`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        // Xử lý lỗi khi gọi API
        console.error("Error fetching products:", error);
      });
  },
  // getProductById:(id)=>{
  //   console.log(id);
  //   const url = `http://localhost:8000/product/${id}`
  //   return axios.get(url).then((res)=> res.data).catch((error)=>{
  //     console.error("error")
  //   })}
  updateUser: (_id, token, userData) => {
    return axios
      .put(`http://localhost:8000/user/update-user/${_id}`, userData, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
  changePassword: (_id, token, passwordData) => {
    return axios
      .put(`http://localhost:8000/user/password-user/${_id}`, passwordData, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
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

export default APIprofile;
