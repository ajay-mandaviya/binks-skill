import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const Container = ({ btnText, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="btns-container">
            <button>{btnText}</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <hr></hr>
        {children}
      </div>
    </>
  );
};

export { Container };
