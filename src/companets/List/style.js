import styled from "styled-components";
export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  box-shadow: 0px 2px 10px #ccc;
  margin-top: 20px;
  display: flex;
  align-items: center;
 justify-content: space-between;
`

export const Img = styled.img`
width: 100px;
height: 75px;
margin-right: 40px;
object-fit:contain ;

`

export const Contant= styled.div`
width: 100%;
margin-right: 20px;
display: flex;
align-items: center;

`
Contant.Title=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #414141;
padding-bottom: 20px;

`
Contant.Count=styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #414141;
margin-right: 15px;
`

Contant.Num=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #414141;
padding-bottom: 20px;
margin-left:820px;
`

Contant.Coun=styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #9E9E9E;
`
Contant.Dif=styled.div`

`


export const Close= styled.div`
width: 100%;
width: 57px;
height: 120px;
background: #F9F9F9;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.5;
  }
`