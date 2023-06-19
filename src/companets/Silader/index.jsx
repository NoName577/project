import React from 'react'
import { Container, Content, Item } from './style'
import kitchen from '../../assents/img/kitchen-icon.png'
import bagdon from '../../assents/img/bedroom-icon.png'
import living from '../../assents/img/livingroom-icon.png'
import closet from '../../assents/img/closet-icon.png'
import child from '../../assents/img/childrensroom-icon.png'
import etc from '../../assents/img/etc.png'
import offis from '../../assents/img/office-icon.png'


export default function Silader() {
    return (
        <Container>
            <Content>
                <Item>
                    <Item.img src={kitchen} />
                    <Item.text>Кухни</Item.text>
                </Item>
                <Item>
                    <Item.img src={bagdon} />
                    <Item.text>Спальни</Item.text>
                </Item>
                <Item>
                    <Item.img src={living} />
                    <Item.text>Гостинные</Item.text>
                </Item>
                <Item>
                    <Item.img src={closet} />
                    <Item.text>Прихожие</Item.text>
                </Item>
                <Item>
                    <Item.img src={child} />
                    <Item.text>Офисная мебель</Item.text>

                </Item>
                <Item>
                    <Item.img src={offis} />
                    <Item.text>Детская</Item.text>

                </Item>
                <Item>
                    <Item.t>Акция</Item.t>
                    <Item.img src={etc} />
                </Item>
            </Content>
        </Container>
    )
}
