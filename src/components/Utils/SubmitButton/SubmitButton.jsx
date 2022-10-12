import React from "react";
import "./SubmitButton.css";

const SubmitButton = (props) => {
  return (
    <button type="submit" className="button">
      {props.text}
    </button>
  );
};

export default SubmitButton;
