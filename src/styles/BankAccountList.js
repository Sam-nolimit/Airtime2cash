import styled from 'styled-components'

export const Bg = styled.div`
  font-family: 'Inter';
  font-style: normal;
`

export const Container = styled.div`
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Form = styled.div`
    flex-direction: column;

    .no-record{
        color: #bebebe;
        font-size: 18px;
    }

    .acount-headers{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Inter';
        font-style: normal;
        margin-bottom: 30px;
        margin-top: 34px;

        h3{
            font-size: 24px;
            color: #012A4A;
            font-weight: 600;
        }
    }

    Button{
        margin: 25px 0;
    }

    @media (max-width: 559px){
        /* width: 490px; */
        
        .acount-headers h3{
            font-size: 18px;
            font-weight: 600;
        }
    }

    @media (max-width: 490px){
       /* width: 359px; */
    }

    @media (max-width: 370px){
        /*margin: auto;*/
        margin-bottom: 8px;
        /* width: 300px; */

        h5{
            font-size: 10px;
        }

        button{
            font-size: 10px;
        }
    }

    @media (max-width: 300px){
        /*margin: auto;*/
        align-items: center;
        /* width: 200px; */

        h5{
            font-size: 8px;
        }

        button{
            font-size: 10px;
        }
    }
`

export const Cards = styled.div`
    align-items: center;
    padding: 8px 16px;
    width: auto;
    height: auto;
    background: #FFFFFF;
    margin-bottom: 24px;
    box-shadow: 1px 3px 5px -3px rgba(0,0,0,0.75);
    -webkit-box-shadow: 1px 3px 5px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 3px 5px -3px rgba(0,0,0,0.75);

    .account-record{
        display: flex;
        justify-content: space-between;
        margin: 0 16px;
        padding: 0px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #012A4A;
    }

    h5{
        margin: 0px;
        padding: 3px 0;
        font-size: 14px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
    }

    button{
        margin: auto;
        margin-right: 0;
        margin-left: 0;
        text-align: center;
        padding: 10px;
        width: 73px;
        height: 37px;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 100px;
        border-style: none;
        font-weight: 400;
        font-size: 14px;
        color: #012A4A;
    }

    button:hover{
        cursor: pointer;
        background: rgba(0, 0, 0, 0.15);
    }


    @media (max-width: 559px){
        margin: auto;
        margin-bottom: 8px;
        /* width: 490px; */

        h5{
            font-size: 12px;
        }

        button{
            font-size: 12px;
        }
    }

    @media (max-width: 490px){
        /* width: 359px; */
    }

    @media (max-width: 359px){
        /* width: 259px; */
        

        .acount-headers h3{
            font-size: 14px;
            font-weight: 600;
        }

        .acount-headers h4{
            font-size: 12px;
            font-weight: 400;
        }
       
    }

    @media (max-width: 300px){
        /* width: 200px; */
        text-align: center;

        .account-record{
            display: block;
        }

        .account-record h5{
            margin: auto;
            width: 100px;
        }

        .acount-headers h3{
            font-size: 8px;
            font-weight: 600;
        }

        .acount-headers h4{
            font-size: 8px;
            font-weight: 400;
        }

        button{
            margin-top: 5px;
            border-radius: 10px;
        }
    }

    @media (max-width: 259px){
       /* width: 159px; */
        
    }

`

export const Scroll = styled.div`
    overflow-y: scroll;
    max-height: 260px;
`