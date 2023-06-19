import React from 'react'
import { Container ,Contant, Menu } from './style'
import { Link } from 'react-router-dom';
import { Texts } from './style';
import { Bonus } from './style';
import cash from '../../assents/img/cashback.png'
import rub from '../../assents/img/Vector (2).png'
import prs from '../../assents/img/Vector (3).png'
export default function Main() {
  return (
   <Container>
     <Contant>

     <Menu>  <span><Link to={'/'}>Главная </Link> / <Link to={'/main'}>Личный кабинет </Link> </span></Menu>

 <Texts>
   <Texts.Text>Бонусная программа</Texts.Text>
<Texts.texts>
<Texts.Text>У вас 0 бонусных баллов</Texts.Text>
<Texts.Text>Правила бонусной программы</Texts.Text>
</Texts.texts>

 </Texts>
    <Bonus>
      <Bonus.other>
        <Bonus.img src={cash}/>
<Bonus.text>Возвращаем до 7% на бонусный счет</Bonus.text>
      </Bonus.other>
      <Bonus.other>
        <Bonus.img src={rub}/>
<Bonus.text>1 бонус = 1 рубль</Bonus.text>
      </Bonus.other>
      <Bonus.other>
        <Bonus.img src={prs}/>
<Bonus.text>Возвращаем до 7% на бонусный счет</Bonus.text>
      </Bonus.other>
    </Bonus>

   </Contant>
 
  
   </Container>
  )
}
