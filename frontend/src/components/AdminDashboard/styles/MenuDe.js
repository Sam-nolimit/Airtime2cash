import styled from "styled-components";

export const Menubox = styled.div`
  box-sizing: border-box;
  padding: 8px 0px;
  width: 150px;
  height: 100px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 4px 8px -2px rgba(33, 33, 33, 0.1),
    0px 2px 4px -2px rgba(33, 33, 33, 0.06);
  border-radius: 8px;
`;

export const Frame43 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-bottom: 12px;
  margin-top: 12px;
  padding: 0px;
  gap: 24px;

  a {
    color: black;
    background-color: transparent;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;



//OPTIONAL MODAL
export const Option = styled.div`
width: 562px;
height: 382px;
background-color: #FFFFFF;;


.text3{
    position: absolute;
width: 200px;
height: 19px;
left: 218px;
top: 24px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #012A4A;
}

.line{
    position: absolute;
width: 568px;
height: 0px;
left: -6px;
top: 59px;
border: 1px solid #D9D9D9;
}

`


export const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 32px;
position: absolute;
width: 466px;
height: 258px;
left: 48px;
top: 91px;

.btn{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 10px;
width: 198px;
height: 48px;
background: linear-gradient(92.1deg, #DE3D6D 55.67%, #F5844C 101.51%);
flex: none;
order: 2;
flex-grow: 0;
}
`


export const Form8791 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 466px;
height: 73px;
flex: none;
order: 0;
flex-grow: 0;




.labeldiv{
    width: 108px;
height: 17px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #012A4A;
flex: none;
order: 0;
flex-grow: 0;
}

.inputdiv{
    box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 16px;
gap: 10px;
width: 466px;
height: 48px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
flex: none;
order: 1;
flex-grow: 0;
}

.bg{
    background: rgba(0, 0, 0, 0.05);
}
`