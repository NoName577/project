import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #ffffff;
`;
export const Content = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
export const Item = styled.div`
  display: flex;
  gap: 30px;
`;
Item.t = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 126.69%;
  color: #d74444;
`;
Item.text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 126.69%;
  color: #414141;
  cursor: pointer;
  transition: 0.2s;
&:hover{
  color: #D74444;
}

`;
export const From = styled.div`
  display: flex;
`;
From.img = styled.img`
margin-right: 10px;
margin-left: 30px;
`;
From.text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 126.69%;
  text-align: right;
  color: #414141;
  cursor: pointer;
`;
