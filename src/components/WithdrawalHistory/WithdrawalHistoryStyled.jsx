import styled from 'styled-components'
export const WithdrawalWrapper = styled.div `
font-size:14px;
`

export const Container = styled.div `
    max-height: 400px;
    overflow: auto;
    
`

export const Withdrawal = styled.div `
    box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.1);
    padding: 15px;
    display:flex;
    margin:20px 0;
    justify-content:space-between;
    & p{
        margin:0;
    }

    & .label-green{
        color:#34A853;
        background-color:#34A8531A;
        padding:5px 8px;
        margin-bottom: 5px;
        border-radius:100px;

    }
    & .label-red{
        color:red;
        background-color:#f5f5f5;
        padding:5px 8px;
        margin-bottom: 5px;
        border-radius:100px;

    }

    & .status{
        display:flex;
        flex-direction:column;
        justify-content:right;
        /* align-items:center; */
        text-align:right;
    }
`
