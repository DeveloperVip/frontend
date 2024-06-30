import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./PathUser.css";
import { useNavigate } from "react-router-dom";

const PathUser = ({setToken}) => {
  const token = localStorage.getItem("token_user");
  const navigate = useNavigate();
  return (
    <div className="path-user">
      <FaUser className="user" style={{ width: "20px" }} />
      <div className="options">
        {!token ? (
          <>
            <div className="option" onClick={() => navigate("/login")}>
              Đăng nhập
            </div>
            <div className="option" onClick={() => navigate("/register")}>
              Đăng ký
            </div>
          </>
        ) : (
          <>
            <div
              className="option"
              onClick={() => navigate("/user/accountsettings")}
            >
              Hồ sơ
            </div>
            <div
              className="option"
              onClick={() => {
                
                localStorage.removeItem("token_user");
                navigate("/home");
                setToken("");
              }}
            >
              Đăng xuất
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PathUser;
