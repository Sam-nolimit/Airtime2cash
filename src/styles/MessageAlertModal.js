import styled from "styled-components";

export const Bg = styled.div`

  display: none;

  @media (min-width: 992px) { 
    position: fixed;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    font-family: "Inter";
    font-style: normal;
    background: rgba(0, 0, 0, 0.65);
    top: 0;
  }
  
`

export const Container = styled.div`
  
  display: none;


  @media (min-width: 576px) {

    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) { 


      background: #ffffff;
      width: 509px;
      height: 408px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);

      h4 {
        color: #21334f;
        font-weight: 600;
        font-size: 24px;
        margin-top: 40px;
      }

      h5 {
        width: 230px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #21334f;
        margin-top: -2px;
        margin-bottom: 30px;
      }

      button {
        width: 343px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 15px 0 15px 0;
        background: rgba(226, 0, 16, 0.05);
        font-weight: 600;
        font-size: 14px;
        color: #de3d6d;
        border-style: none;
      }

      button:hover {
        cursor: pointer;
        background: rgba(226, 0, 16, 0.15);
      }

    }

    
    @media (min-width: 1200px) { }


    @media (min-width: 1400px) { }

`
