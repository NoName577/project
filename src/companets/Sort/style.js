import styled from 'styled-components'

export const Container= styled.div`
  height: 450px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  position: relative;
    
   
`

export const Content= styled.div`
 width: 100%;
  max-width: 1240px;
 margin: 0 auto;

`

export const Img= styled.img`
 height: 450px;
 width: 100%;
`

export const Sld= styled.div`
position: absolute;

z-index: 3;
margin-left: 130px;
`
Sld.h=styled.h1`
font-family: 'Playfair Display';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 105.3%;
letter-spacing: 0.02em;
text-transform: uppercase;
width: 216px;
height: 106px;
color: #3C3C3C;
margin-top: 100px;
`

Sld.text=styled.h4`
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140.8%;
letter-spacing: 0.02em;
width: 350px;
height: 23px;
color: #343434;
margin-top: 15px;
`

Sld.btn =styled.button`
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 140.8%;
letter-spacing: 0.04em;
color: #414141;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
width: 163px;
height: 45px;
border: none;
margin-top: 20px;
cursor: pointer;
`


export const Icon= styled.div`
display: flex;
justify-content: space-between;
`
Icon.left=styled.img`
margin-left: -80px;
margin-top: -110px;
width: 30px;
height: 30px;
cursor: pointer;
`
Icon.right=styled.img`
margin-left: 1050px;
margin-top: -110px;
cursor: pointer;
width: 30px;
height: 30px;
`