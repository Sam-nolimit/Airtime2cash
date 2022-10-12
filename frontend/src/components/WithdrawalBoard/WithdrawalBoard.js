import styled from 'styled-components'



//Form 
export const FormBox = styled.div `

box-sizing: border-box;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 24px 60px;
margin-left: 32.3%;
gap: 32px;
width: 42.43rem;
height: 931px;

top: 176px;

margin-top: 4%;
background: FFFFF;
border: 1px solid #D9D9D9;
overflow-y: scroll;
flex-grow: 0;

`;

export const StyledForm = styled.div`
padding: 10px;
top: 200px;
width: 559px;
height: 389px;
flex: none;
order: 1;
flex-grow: 0;
`

export const SelectStyle = styled.select`
width: 100%;
padding:3%;
outline: none;
border:1px solid #D9D9D9;
margin-bottom: 40px;
`;



export const InputStyle = styled.div`
margin-left: -7.5rem;
width: 551px;
& .input{
    padding: 0.5rem 1rem;
    width: 100%;
    height: 50px;
    outline: none;
    border:1px solid #D9D9D9;
    margin-bottom: 40px;
}
& .select.input{
    padding: 0.5rem 1rem;
    width: 100%;
    height: 50px;
    outline: none;
    border:1px solid #D9D9D9;
    margin-left: 7.5rem;
}
`;

