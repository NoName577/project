import React from 'react'
import { Container ,Contant, Menu } from './style'
import { Link } from 'react-router-dom';
import { Text } from './style';
import { Inputs } from './style';
import { Textarea } from './style';
import { Button } from './style';
import { From } from './style';
import { Texts } from './style';
import { The } from './style';

import tele from "../../assents/img/tele.png";

import mail from "../../assents/img/mail.png";
import map from '../../assents/img/yandex-map.png'
export default function Contact() {
  return (
   <Container>
     <Contant>
     <Menu>  <span><Link to={'/'}>Главная </Link> / <Link to={'/main'}>Личный кабинет </Link> </span></Menu>
     <Text>Свяжитесь с нами</Text>
   </Contant>

   <From>
            <From.img src={tele} />
            <From.text>  <a href="tel:">8 (964) 89 99 119</a>  </From.text>
            
            <From.img src={mail} />
            <From.text> mebel_loft_anapa@mail.ru</From.text>
          </From>
          
          <Texts>Адрес: г. Анапа, Анапское шоссе, 30 Ж/К Черное море</Texts>
 <Inputs>

 <Inputs.input></Inputs.input>
 <Inputs.inputs></Inputs.inputs>
 </Inputs>
 <Textarea>
  <Textarea.input></Textarea.input>
  
  </Textarea>
  <Button>
    <Button.Btn>Прикрепить файл</Button.Btn>  
    <Button.Btns>Отправить</Button.Btns>  
  </Button>
<The>
<The.text>Адрес нашей компании</The.text>
<The.map src={map}/>
</The>
  
   </Container>
  )
}
