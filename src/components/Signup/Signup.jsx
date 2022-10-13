import "./Signup.css";
import Logo from "../Utils/Logo/Logo";
import InputField from "../Utils/Input/Input";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "../Utils/SubmitButton/SubmitButton";
import axios from "axios";
import { useState } from "react";
import { Button } from "../Utils/Button/Button";
import "bootstrap/dist/css/bootstrap.css";
import { mainAxios } from "../Axios/Axios";
import { useNavigate } from "react-router-dom";

export const Signup = ({ ...props }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  // handlechange logic remove this comment later
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.firstname === "" ||
      user.lastname === "" ||
      user.username === "" ||
      user.email === "" ||
      user.phoneNumber === "" ||
      user.password === "" ||
      user.confirm_password === ""
    ) {
      toast.error("All fields are required", {
        position: "top-right",
      });
    }
    try {
      const res = await mainAxios.post("users/users", {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
        confirmPassword: user.confirmPassword,
      });

      console.log("TOKEN");

      if (res.data.status === "Success") {
        toast.success("User created successfully", {
          position: "top-right",
          autoClose: false,
        });

        setTimeout(() => {
          navigate("/users/registered");
        }, 3000);
      } else {
        toast.error(res.response.data.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error, {
        position: "top-right",
      });
    }
  };

  return (
    <div className="signup container-fluid">
      <div className="row signup-card mt-3">
        <div className=" col-xs-12 col-md-8 signup-card-padding">
          <div className="signup-box">
            <div className="signup-heading">
              <Logo />
            </div>
            <a href="/" className="col-md-6 rounded-button btn rounded-pill">
              <IoIosArrowRoundBack /> Go back
            </a>

            <div className=" frame9">
              {/* <ToastContainer /> */}
              <span>Create an account</span>
            </div>
            <form onSubmit={handleSubmit} className="update-form">
              <div className="">
                <InputField
                  childDefaultValue={user.firstname}
                  handleChange={handleChange}
                  name="firstname"
                  type="text"
                  childClass="input"
                  label="Firstname"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="">
                <InputField
                  childDefaultValue={user.lastname}
                  handleChange={handleChange}
                  name="lastname"
                  type="text"
                  childClass="input"
                  label="Lastname"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="">
                <InputField
                  childDefaultValue={user.username}
                  handleChange={handleChange}
                  name="username"
                  type="text"
                  childClass="input"
                  label="Username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="">
                <InputField
                  childDefaultValue={user.email}
                  handleChange={handleChange}
                  name="email"
                  type="email"
                  childClass="input"
                  label="Email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="">
                <InputField
                  childDefaultValue={user.phoneNumber}
                  handleChange={handleChange}
                  name="phoneNumber"
                  type="text"
                  childClass="input"
                  label="Phone number"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="">
                <InputField
                  name="password"
                  type="password"
                  childClass="input"
                  label="Password"
                  childDefaultValue={user.password}
                  handleChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
              <div className="">
                <InputField
                  name="confirmPassword"
                  type="password"
                  childClass="input"
                  label="Confirm Password"
                  childDefaultValue={user.confirmpassword}
                  handleChange={handleChange}
                  placeholder="Confirm password"
                />
              </div>
              <div className="">
                <Button type={"submit"} text="Signup" />
              </div>
            </form>
            <div className="sign_container">
              Already have an account?
              <a href="/login" className="sign_in">
                {" "}
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
