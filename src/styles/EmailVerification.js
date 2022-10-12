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

    .v-header{
        margin-top: 32px 0 21px 0;
        color: #03435F;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
    }

    .v-message{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        width: 319px;
        margin: 0;
        color: #21334F;
    }

    .v-link{
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        margin: 16px 0 0 0;
        color: #012A4A;

        span{
            color: #DF3E6E;
        }
        span:hover{
            cursor: pointer;
            user-select: none;
        }
    }

    @media (max-width: 860px){
        width: 600px;
    }

    @media (max-width: 600px){
        width: 400px;
    }

    @media (max-width: 400px){
        width: 330px;

        .content{
            width: 200px;
        }

        .v-header{
            margin-top: 14px;
            font-size: 25px;
            line-height: 12px;
        }

        .v-message{
            font-size: 14px;
            line-height: 20px;
            width: 319px;
        }

        .v-link{
            font-size: 14px;
            line-height: 16px;
            width: 190px;
        }

        Button{
            font-size: 12px;
        }

    }

    @media (max-width: 330px){
        width: 250px;

        .content{
            width: 200px;
        }

        .v-header{
            margin-top: 14px;
            font-size: 16px;
            line-height: 12px;
        }

        .v-message{
            font-size: 12px;
            line-height: 16px;
            width: 219px;
        }

        .v-link{
            font-size: 12px;
            line-height: 16px;
            width: 150px;
        }

        Button{
            font-size: 10px;
        }
    }
`