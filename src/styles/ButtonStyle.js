import styled, { css } from 'styled-components'

export const ButtonStyle = styled.button`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    /* width: 320px; */
    height: 48px;
    background: linear-gradient(101.99deg, #DE3D6D 55.72%, #F5844C 103.65%);
    border-radius: 6px;
    border-style: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 24px;


    :hover{
        cursor: pointer;
        background: linear-gradient(90.99deg, #DE3D6D 40.72%, #F5844C 90.65%);
    }

    :disabled{
        background: #dddddd;
    }

    ${props => props.flag && css`
        padding: 8px 16px 10px;
        /* width: 136px; */
        height: 42px;
        background: rgba(0, 0, 0, 0.06);
        opacity: 0.8;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        margin-top: 50px;
        border-radius: 0px;

        :hover{
        cursor: pointer;
        background: #bebebe;
        }
    `}
`