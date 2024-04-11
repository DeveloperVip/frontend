import React from "react";
import "./Login.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Register from "../Register/Register";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, "  ", password);
    const data = await axios.post("http://localhost:3001/login", {
      userName,
      password,
    });
    console.log("data", data);
  };
  const handleChange = (e) => {
    const target = e.target;
    if (target.name === "Tên đăng nhập") {
      setUserName(target.value);
    } else setPassword(target.value);
  };
  return (
    <div className="login">
      <h1>Đăng nhập</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="input-login">
          <div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Tên đăng nhập"
              name="Tên đăng nhập"
              id=""
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Mật khẩu"
              name="Mật khẩu"
              id=""
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          đăng nhập
        </button>
      </form>
      <div className="forgot-login">
        <h4>
          <a href="">Bạn quên đăng nhập</a>{" "}
        </h4>
      </div>
      <div className="no-account">
        <h4>
          <span style={{ color: "black" }}>- Bạn chưa có tài khoản? </span>
        </h4>
        <h4>
          <Link onClick={navigate("/register")}>Đăng ký ngay</Link>
        </h4>
      </div>
      <div className="another-login">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
          <span style={{ flex: 1 }}>Facebook</span>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
          </svg>
          <span>Google</span>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-tiktok"
            viewBox="0 0 16 16"
          >
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
          </svg>
          <span>Tiktok</span>
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Login;
