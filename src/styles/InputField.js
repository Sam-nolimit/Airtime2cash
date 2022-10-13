import styled from "styled-components";

export const Input = styled.div`
  text-align: left;

  input[type="text"],
  input[type="password"],
  input[type="number"] select {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    width: 100%;
    padding: 10px 0 10px 16px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    color: black;
  }

  label {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    color: #012a4a;
  }
`;
