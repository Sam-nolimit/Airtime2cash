import React from "react";
import { Input } from "../styles/InputField";

const InputField = ({
  label,
  placeholder,
  defaultValue,
  height,
  name,
  value,
  changeHandle,
  type
}) => {

  if(!type){
    type = "text"
  }
  return (
    <Input>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={{ height: { height } }}
        name={name}
        value={value}
        defaultValue = { defaultValue}
        onChange={changeHandle}
      />
    </Input>
  );
};

export default InputField;
