import styled from "styled-components";
import { ReactComponent as heart } from "../../assents/svg/список желаемого.svg";

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 30px;
`;
export const Row = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  max-width: 50%;
  padding-right: 30px;
`;

export const Img = styled.img`
  width: 100%;
  height: 500px;
  margin-top: -20px;
  margin-right: 60px;
  align-items: start;
`;

export const Star = styled.img`
  margin-right: 3px;
  margin-top: 22.5px;
  cursor: pointer;
`;

export const Stars = styled.div``;
export const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: #414141;
  margin-top: 16px;
`;

export const Name = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #686868;
  margin-top: 10px;
`;
export const Detaels = styled.div`
  display: flex;
  align-items: center;
`;
Detaels.Price = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: #414141;
  margin-top: 19px;
`;
Detaels.Button = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  padding: 12px 50px;
  margin-left: 31px;
  color: #ffffff;
  border: 0;
  outline: none;
  margin-top: 22.5px;
  background: #245462;
  cursor: pointer;
  margin-right: 20px;
`;
Detaels.Text = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #414141;
  margin-top: 22.5px;
  margin-left: 10.5px;
`;

export const Comments = styled.div`
  padding-top: 20px;
`;

Comments.Title = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #414141;
`;

Comments.Text = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  padding-top: 10px;
  color: #686868;
`;

export const Sizes = styled.div`
  margin-top: 20px;
`;

Sizes.Title = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #414141;
`;

Sizes.Text = styled.h3`
  padding: 7px;
  width: 210px;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #414141;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  margin-top: 17px;
`;

export const Nav = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #414141;
  margin-top: 90px;
  margin-bottom: 56px;
`;

export const Menu = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #969696;
  margin-bottom: 20px;
`;
export const Heart = styled(heart)`
margin-top: 20px;
  cursor: pointer;
`;