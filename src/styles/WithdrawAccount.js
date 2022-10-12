import styled from "styled-components";

export const Bg = styled.div`
  /* display: flex;
    align-items: center;
    background: #F5F5F5;
    height: 100vh;
    width: 100vw; */
`;

export const Form = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .h-label {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    color: #012a4a;
  }

  select {
    appearance: none;
    border: none;
    padding: 12px 0 12px 16px;
    margin: 0;
    width: 100%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    cursor: pointer;
    outline: none;
  }

  select::-ms-expand {
    display: none;
  }

  .select + div {
    width: 100%;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-top: 8px;
    margin-bottom: 16px;
    padding: 0;
  }

  .acount-headers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    margin: 30px 0;

    h3 {
      font-size: 24px;
      color: #012a4a;
      font-weight: 600;
    }

    h4 {
      font-size: 14px;
      color: #de3d6d;
      font-weight: 400;
    }

    h4:hover {
      user-select: none;
      cursor: pointer;
    }

    h6 {
      font-weight: 900;
    }
  }

  @media (max-width: 559px) {
    /*width: 459px;*/
    button {
      width: 100%;
    }
  }

  @media (max-width: 459px) {
    /*width: 359px;*/
  }

  @media (max-width: 359px) {
    /*width: 259px;*/

    .acount-headers h3 {
      font-size: 16px;
      font-weight: 600;
    }

    .acount-headers h4 {
      font-size: 12px;
      font-weight: 400;
    }
  }

  @media (max-width: 259px) {
    /*width: 159px;*/
  }

  @media (min-width: 576px) {
    /*width: 400px;*/
  }

  @media (min-width: 768px) {
    /*width: 500px;*/
    button {
      width: 198px;
    }
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }

  @media (min-width: 1400px) {
  }
`;

export const Container = styled.div`
  /* background: #FFFFFF; */
  /* width: 860px; */
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 559px) {
    height: 100%;
  }
`;
