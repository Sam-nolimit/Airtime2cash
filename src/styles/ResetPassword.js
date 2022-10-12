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


    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;

        h3{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color: #DE3D6D;
        }
        span{
            color: #F5844C;
        }
    }

    .l-form{
        display: flex;
        flex-direction: column;
        align-items: left;
        padding: 0px;
        width: 320px;

        .l-header{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #21334F;
        }

        label{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #21334F;
        }

        input{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 8px 16px;
            gap: 10px;
            height: 38px;
            background: #FFFFFF;
            border: 1px solid #D9D9D9;
            margin-top: 8px;
        }

        .cp-login{
            margin-top: 16px
        }

        .cp-btn{
            margin-bottom: 24px;
        }

        Button{
            width: 100%;
            background: linear-gradient(92.1deg, #DE3D6D 55.67%, #F5844C 101.51%);
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

        .l-form{
           width: 300px;   

           .l-header{
                font-size: 16px;
            }

            label, input {
                font-size: 12px;
                height: 20px;
            }
       }

        Button{
            font-size: 12px;
            margin-top: -4px;
            height: 45px;
        }

        .logo{
            gap: 11px;

            h3{
                font-size: 16px;
            }
        }

    }

    @media (max-width: 330px){
        width: 250px;

       .l-form{
           width: 220px;   

           .l-header{
                font-size: 14px;
            }

            label, input {
                font-size: 10px;
                height: 18px;
            }
       }

        Button{
            font-size: 10px;
            margin-top: -8px;
            height: 40px;
        }

        .logo{
            gap: 10px;

            h3{
                font-size: 14px;
            }
        }
    }


`