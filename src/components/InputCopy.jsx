import React, { useState } from "react";
import { Input } from "../styles/InputField";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const StyledDiv = styled.div`
  display: flex;
  input {
    margin: 0 !important;
    min-width: 240px !important;
  }

  span {
    background-color: grey;
    display: inline-block;
    padding: 7px;
    cursor: pointer;
    color: #ffff;
  }
`;

const InputField = ({
  label,
  placeholder,
  height,
  name,
  value,
  changeHandle,
  clickHandle,
  text,
}) => {
  const [isCopied, setIscopied] = useState(false);

  const onCopyText = (e) => {
    setIscopied(true);
    setTimeout(() => {
      setIscopied(false);
    }, 2000);
  };
  return (
    <Input>
      <label>{label}</label>
      <StyledDiv>
        <input
          type={"text"}
          placeholder={placeholder}
          style={{ height: { height } }}
          name={name}
          value={value}
          onChange={changeHandle}
          onClick={clickHandle}
          disabled
        />
        <CopyToClipboard text={text} onCopy={onCopyText}>
          <span>{isCopied ? "Copied" : "Copy"}</span>
        </CopyToClipboard>
      </StyledDiv>
    </Input>
  );
};

export default InputField;
