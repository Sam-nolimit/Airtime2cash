import "./Login.css";
import Logo from "../Utils/Logo/Logo";
import Input from "../Utils/Input/Input";
import SubmitButton from "../Utils/SubmitButton/SubmitButton";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { mainAxios } from "../Axios/Axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const DivPara = styled.div`
  width: 100%;
  margin-top: -11px;
  margin-bottom: 40px;
  p {
    font-size: 12px;
  }
  p a {
    text-decoration: none;
  }
`;

const DivLogin = styled.div`
  margin-bottom: 40px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  font-size: 12px;

  p a {
    text-decoration: none;
    color: #de3d6d;
    font-weight: bold;
  }
`;

export const Login = ({ ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginUser = async (email, password) => {
    try {
      const emailRegex = new RegExp(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "gm"
      );
      const isValidEmail = emailRegex.test(email);
      let res;
      if (email === "" || password === "") {
        return toast.error("Email or password cannot be empty");
      } else {
        if (isValidEmail) {
          res = await mainAxios.post("/users/login", {
            email: email,
            password: password,
          });
        } else {
          res = await mainAxios.post("/users/login", {
            username: email,
            password: password,
          });
        }
      }

      localStorage.setItem("email", res.data.User.email);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("firstname", res.data.User.firstname);
      localStorage.setItem("lastname", res.data.User.lastname);
      localStorage.setItem("avatar", res.data.User.avatar);
      localStorage.setItem("phoneNumber", res.data.User.phoneNumber);
      localStorage.setItem("username", res.data.User.username);
      localStorage.setItem("id", res.data.User.id);
      localStorage.setItem("role", res.data.User.role);

      toast.success(res.data.message);
      setTimeout(() => {
        if(res.data.User.role === 'user'){
          navigate("/dashboard")
        } else if(res.data.User.role === 'admin'){
          navigate("/admin-dashboard")
        }
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(email, password);
  };

  return (
    <div className="login">
      <div className="login-card">
        <div className="login-card-padding">
          <div className="login-box">
            <div className="login-heading">
              <Logo />
            </div>
            <DivLogin>
              <h2>Login</h2>
            </DivLogin>
            <form onSubmit={handleSubmit}>
              <div className="">
                <Input
                  type="input"
                  childClass="input"
                  label="Email"
                  placeholder="Enter your email or username"
                  name="email"
                  defaultValue={email}
                  handleChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="">
                <Input
                  type="password"
                  childClass="input"
                  label="Password"
                  placeholder="Enter your password"
                  name="password"
                  handleChange={(e) => setPassword(e.target.value)}
                  defaultValue={password}
                />
              </div>
              <DivPara>
                <p>
                  <a href="/forgot-password">Forgot password?</a>
                </p>
              </DivPara>

              <div className="">
                <SubmitButton text="Login" onClick={handleSubmit} />
              </div>
            </form>

            <BtnContainer>
              <p>
                Don't have an account? <a href="/signup">Create Account</a>{" "}
              </p>
            </BtnContainer>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
    // </ToastContainer>
  );
};
