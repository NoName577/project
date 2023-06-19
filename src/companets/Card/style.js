import styled from "styled-components";
import { ReactComponent as heart } from "../../assents/svg/список желаемого.svg";
export const Container = styled.div`
  width: 100%;
  max-width: 263px;
  background: #ffffff;
  box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.11);
  margin: 5px;
  padding: 21px 15px;
  position: relative;
`;

Container.Header = styled.div`
  margin-top: 38px;
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

Container.Body = styled.div`
  margin-top: 54px;
`;
export const Title = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #414141;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
`;

export const Text = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #414141;
  padding-top: 6px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
`;
export const Subtitle = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  padding-top: 15px;
  color: #414141;
`;

export const Price = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #414141;
  padding-top: 9px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;
Footer.Col = styled.div``;

Footer.Text = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: #c4c4c4;
`;

Footer.Size = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: #414141;
  margin-top: 8px;
  padding-top: 8px;
`;

export const Button = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
  background: #245462;
  padding: 13px 0px;
  height: 40px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  transition: 0.3s;
  &:hover {
    transition: scale(1.1);
  }
`;

export const Heart = styled.div`
  position: absolute;
  right: 15px;
  top: 21px;
`;
Heart.Black = styled(heart)`
  cursor: pointer;
`;