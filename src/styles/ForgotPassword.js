import styled from 'styled-components'

export const Bg = styled.div`
  display: flex;
  align-items: center;
  background: #F5F5F5;
  height: 100vh;
  width: 100vw;
`


export const Container = styled.div`
    background: #FFFFFF;
    width: 860px;
    height: 527px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 432px;
        height: 365px;
    }

    .f-password{
        margin: 0px;
        color: #21334F;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
    }

    .f-header{
        margin-top: 24px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #C4C4C4;
    }

    .f-form{
        display: flex;
        flex-direction: column;
        align-items: left;
        width: 320px;
        padding: 0px;

        .f-label{
            text-align: left;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #03435F;
        }

        input{
            margin-top: 4px;
            padding: 9px 16px 8px 16px;
            width: 100%;
            box-sizing: border-box;
            height: 48px;
            background: #FFFFFF;
            opacity: 0.8;
            border: 1px solid #03435F;
            border-radius: 6px;
            font-size: 14px;
        }

        input::placeholder{
            font-family: 'Helvetica Neue';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            color: #C4C4C4;
        }

        .errorMsg{
            font-size: 12px;
            padding: 3px;
            color: red;
            display: none;
        }

        input:invalid[focused="true"] ~ span {
            display: block;
        }
    }

    @media (max-width: 860px){
        width: 600px;
    }

    @media (max-width: 600px){
        width: 400px;

        .content{
            width: 350px;
        }
    }

    @media (max-width: 400px){
        width: 330px;

        .content{
            width: 300px;
        }

        .f-form{
            width: 250px;
            /* margin-bottom: -25px; */
        }

        .f-password{
            font-size: 20px;
        }

        .f-header{
            margin-top: 14px;
            font-size: 14px;
            line-height: 18px;
        }

    }

    @media (max-width: 330px){
        width: 250px;

        .content{
            width: 200px;
        }

        .f-form{
            width: 150px;
            margin-bottom: -25px;

            .errorMsg{
                font-size: 10px;
                margin-top: 10px;
                margin-bottom: -10px;
                color: red;
                display: none;
            }
        }

        .f-password{
            font-size: 20px;
        }

        .f-header{
            margin-top: 14px;
            font-size: 10px;
            line-height: 12px;
        }

        label, Button{
            font-size: 10px;
            height: 18px;
        }

        .f-label{
            font-size: 10px !important;
        }

        input{
            height: 32px !important;
            margin-bottom: -12px;

        }
    }

`
