import styled from "styled-components";

export const Bg = styled.div`

  @media (min-width: 992px) { 
    position: fixed;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    font-family: "Inter";
    font-style: normal;
    background: rgba(0, 0, 0, 0.75);
    top: 0;
    left: 0
  }

  @media (max-width: 800px) {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        font-family: "Inter";
        font-style: normal;
        background: rgba(0, 0, 0, 0.75);
        top: 0;
        left: 0
   }
  
`

export const Container = styled.div`

  @media (min-width: 576px) {

    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) { 


      background: #ffffff;
      width: 409px;
      height: 308px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);

      h4 {
        color: #21334f;
        font-weight: 600;
        font-size: 24px;
        margin-top: 20px;
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

      .buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 15px 20px;
        font-weight: 600;
        margin: 0 10px;
        font-size: 16px;
        color: #de3d6d;
        border-radius: 10px;
        border-style: none;
      }

      .delete{
        color: red
      }

      .cancel{
        color: blue
      }

      button:hover {
        cursor: pointer;
        background: rgba(226, 0, 16, 0.15);
      }

    }

    @media (max-width: 800px) {
        background: #ffffff;
        width: 350px;
        height: 280px;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);

        button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 10px 10px;
            font-weight: 600;
            margin: 0 10px;
            font-size: 14px;
            color: #de3d6d;
            border-radius: 10px;
            border-style: none;
        }

        .buttons{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        h4, h5{
            font-size: 14px;
        }
    }

    
    @media (max-width: 280px) { 
        width: 250px;
        height: 190px;
        padding: 10px 0;

        h4, h5{
            font-size: 12px;
        }
    }


    @media (min-width: 1400px) { }

`
