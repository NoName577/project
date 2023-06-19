import styled from "styled-components";
import { ReactComponent as heart } from "../../assents/svg/список желаемого.svg";
import { ReactComponent as cart } from '../../assents/svg/оповещение.svg'
export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 115px;
`;
export const Content = styled.div`
  max-width: 1240px;
  width: 100%;
  padding: 0 20px;
  justify-content: space-between;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: 112px;
  height: 25px;
`;
export const Item = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #414141;
  padding-left: 30px;
`;
export const Input = styled.div`
  width: 280px;
  height: 15px;
  padding: 13px 15px;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  margin-left: 20px;
`;
Input.img = styled.img`
  padding: 15px 15px 15px 0px;
`;
Input.text = styled.input`
  border: 0px;
  outline: none;
  background-color: #f9f9f9;
`;
export const From = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
From.img = styled.img`
padding-left: 30px;
padding-right: 10px;
`;
From.text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #414141;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
Icons.img = styled.img`
`;
From.imgs = styled.img`
padding-right: 10px;
`;
export const Heart = styled(heart)`
  cursor: pointer;
`;
export const Cart = styled.div`
  position: relative;
`

Cart.Icon = styled(cart)`
position: absolute;
top:2px;
right: -1px;
`