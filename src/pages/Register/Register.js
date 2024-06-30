import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate= useNavigate();
  const initialValue = {
    fullName: "",
    userName: "",
    place: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    security:""
  }
  const [state, setState] = useState(initialValue);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    const data = await axios.post("http://localhost:8000/user/create-user", {
      ...state,
    });
    console.log("🚀 ~ handleSubmit ~ data:", data)
    setState(initialValue)
    if(data.data){navigate("/login")}
  };
  const handleRepo= ()=>{
    setState(initialValue);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="register">
      <h1>đăng ký</h1>
      <form className="form-register" onSubmit={handleSubmit}>
        <div className="frame">
          <div className="input-register">
            <span>*</span>
            <input
              onChange={handleChange}
              value={state.fullName}
              type="text"
              placeholder="Họ và tên"
              name="fullName"
            />
          </div>
          <div className="input-register">
            <span>*</span>
            <input
              onChange={handleChange}
              value={state.userName}
              type="text"
              placeholder="Tên đăng nhập"
              name="userName"
            />
          </div>

          <div className="input-register">
            <span>*</span>
            <input
              onChange={handleChange}
              type="text"
              value={state.place}
              placeholder="Địa chỉ"
              name="place"
            />
          </div>
          <div className="input-register">
            <span>*</span>
            <input
              onChange={handleChange}
              value={state.password}
              type="password"
              placeholder="Mật khẩu"
              name="password"
            />
          </div>
          <div className="input-register">
            <span>*</span>
            <input
              onChange={handleChange}
              type="email"
              value={state.email}
              placeholder="Email"
              name="email"
            />
          </div>

          <div className="input-register">
            <span>*</span>
            <input
              onChange={handleChange}
              type="password"
              value={state.confirmPassword}
              placeholder="Xác nhận mật khẩu"
              name="confirmPassword"
            />
          </div>
          <div className="input-register">
            <span>*</span>
            <input
              onChange={handleChange}
              type="number"
              value={state.phone}
              placeholder="Số điện thoại"
              name="phone"
            />
          </div>
          <div className="input-register" style={{justifyContent:"unset"}}>
            <span>*</span>
            <div className="security">
              <input
              onChange={handleChange}
                style={{ width: "90px" }}
                type="text"
                value={state.security}
                placeholder="Mã bảo mật "
                name="security"
              ></input>
              <img
                src="https://demo037058.web30s.vn/captcha/create?background=transparent&type=all&font_color=495057&length_text=5&font_family=&key=register-member"
                alt=""
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </svg>
              </button>
            </div>
          </div>

          <div className="button-register left">
            <button type="submit">đăng ký</button>
          </div>
          <div className="button-register right">
            <button onClick={handleRepo}>làm lại</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
