import styled from 'styled-components'

export const Bg = styled.div`
    /* display: flex;
    align-items: center;
    background: #F5F5F5;
    height: 100vh;
    width: 100vw; */

`

export const Form = styled.div`
   
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 16px;

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    .h-label{
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        color: #012A4A;
        margin-bottom: 8px;
    }

    .acount-headers{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Inter';
        font-style: normal;
        margin-bottom: 30px;
        margin-top: -30px;

        h3{
            font-size: 24px;
            color: #012A4A;
            font-weight: 600;
        }

        h4{
            font-size: 14px;
            color: #DE3D6D;
            font-weight: 400;
        }

        h4:hover{
            user-select: none;
            cursor: pointer;
        }
    }



    @media (max-width: 559px){
        /* width: 459px; */
        
    }

    @media (max-width: 459px){
        /* width: 359px; */

        Select{
            /* border: 1px solid green; */
        }
    }

    @media (max-width: 359px){
        // width: 259px;

        .acount-headers h3{
            font-size: 16px;
            font-weight: 600;
        }

        .acount-headers h4{
            font-size: 12px;
            font-weight: 400;
        }
    }

    @media (max-width: 259px){
        /* width: 159px; */
    }


    @media (min-width: 576px) {
        /* width: 400px; */
    }

    @media (min-width: 768px) {
        /*width: 500px;*/
    }

    @media (min-width: 992px) { }

    
    @media (min-width: 1200px) { }


    @media (min-width: 1400px) { }

`

export const Container = styled.div`
    /* background: #FFFFFF; */
    /* width: 860px; */
    height: 527px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    @media (max-width: 559px){
        height: 427px;
    }

`


