import styled from "styled-components";
import { ReactComponent as empty } from "../../assents/svg/empty.svg";
export const Container = styled.div`
max-width: 1240px;
margin: 0 auto;
padding: 0 20px;
padding-top: 30px;
margin-bottom: 70px;
`

export const Row = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
Row.Title= styled.h3`
width: 107px;
height: 19px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #414141;
margin-bottom: 20px;
`


export const Menu =styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #969696;
margin-bottom: 40px;
margin-top: 30px;
`

export const Empty = styled(empty)`
  height: 456px;
`;