import styled from "styled-components";
import { ReactComponent as empty } from "../../assents/svg/empty.svg";
export const Container = styled.div`
  margin-top: 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 35px;
`;
export const Empty = styled(empty)`
  height: 456px;
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
