import styled from "styled-components"
export const Container = styled.div`
display: flex;
align-items: center;



`
export const Content=styled.div`
max-width: 1240px;
width: 100%;
padding: 0 20px;

margin: 0 auto;
display: flex;
align-items: center;
background: #FFFFFF;
height: 70px;
justify-content: space-between;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
`
export const Item = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
Item.img= styled.img`
margin-left: 40px;
`
Item.text= styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
margin-left: 15px;
font-size: 16px;
line-height: 19px;
color: #414141;`
Item.t= styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
margin-left: 15px;
font-size: 16px;
line-height: 19px;
color: red;`
