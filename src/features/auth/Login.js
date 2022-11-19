import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "./authSlice";
import "./login.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.authSlice);
  console.log(isLogin);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   if (isLogin) {
  //     navigate("/");
  //   }
  // }, []);

  const handleUserLogin = (e) => {
    e.preventDefault();
    dispatch(signIn(userLogin));
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2>Welcome Back</h2>
        </div>
        <div className="login-input-container">
          <form onSubmit={handleUserLogin}>
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              <input
                type="text"
                placeholder="Enter your Email"
                id="emailInput"
                name="email"
                value={userLogin.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                id="passwordInput"
                value={userLogin.password}
                name="password"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="btn-contaiers">
              <button type="submit" className="login-btn">
                Guest Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
