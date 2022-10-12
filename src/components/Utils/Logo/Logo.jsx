import React from "react";
import LogoPNG from "../../../images/Logo.svg";
import "./Logo.css";
function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={LogoPNG} alt="logo" />
      </a>
    </div>
  );
}

export default Logo;
