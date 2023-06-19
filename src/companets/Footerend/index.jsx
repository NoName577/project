import React from "react";
import { Container, Content, Row, Item, From } from "./style";
import iphone from "../../assents/img/phone.png";
import inst from "../../assents/img/inst.png";
import mail from "../../assents/img/mail.png";

export default function Footerend() {
  return (
    <Container>
      <Content>
        <Row>
          <Item>
            <Item.t>Акция</Item.t>
            <Item.text>Новинки</Item.text>
          </Item>
          <From>
            <From.img src={iphone} />
            <From.text>8 (964) 89 99 119</From.text>
            <From.img src={inst} />
            <From.text>INSTAGRAM</From.text>
            <From.img src={mail} />
            <From.text>mebel_loft_anapa@mail.ru</From.text>
          </From>
        </Row>
      </Content>
    </Container>
  );
}
