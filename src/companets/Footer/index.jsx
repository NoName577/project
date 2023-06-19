import React from "react";
import { Container, Content, Row, Col, Logo } from "./style";
import logo from "../../assents/img/logo (1).png";
import Footerend from "../Footerend";

export default function Footer() {
  return (
    <Container>
      <Content>
        <Row>
          <Col>
            <Col.start>
            <h3>НАВИГАЦИЯ</h3>
    <Col.Text><p>Кухни</p></Col.Text>
    <Col.Text> <p>Спальни</p></Col.Text>
    <Col.Text>  <p>Гостинные</p></Col.Text>
            </Col.start>
            <Col.cenrt>
              <h3> </h3>
              <Col.Text> <p>Прихожие</p></Col.Text>
              <Col.Text><p>Офисная мебель</p></Col.Text>
              <Col.Text><p>Детская</p></Col.Text>
            </Col.cenrt>
            <Col.end>
              <h3> </h3>
              <Col.Text>  <p>Шкафы</p></Col.Text>
              <Col.Text> <p>Матрасы </p></Col.Text>
              <Col.Text> <p>Мягкая мебель</p></Col.Text>
            </Col.end>
          </Col>
          <Logo>
            <Logo.img src={logo} />

            <Logo.text>
              г. Анапа, Анапское шоссе,
              <br />
              30 Ж/К Черное море
            </Logo.text>
          </Logo>
        </Row>
        <Footerend />
      </Content>
    </Container>
  );
}
