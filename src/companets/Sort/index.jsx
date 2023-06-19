import React from 'react';
import hero from '../../assents/img/1785 1.png';
import { Carousel } from 'antd';
import { Container, Content,Img} from './style';
import { Sld } from './style';
 
export default function Sort() {
   const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
    return (
        <Container>
            <Content>

            <Carousel autoplay dots={false}>
    <div>
    <Sld>
    <Sld.h>
     LOFT
     МЕБЕЛЪ 
    </Sld.h>
  <Sld.text>Современная и удобная мебель в Анапе</Sld.text>
  
  <Sld.btn>СМОТРЕТЬ КАТАЛОГ</Sld.btn>
 
  </Sld>
    <Img src={hero} />
    </div>
    <div>
    <Sld>
    <Sld.h>
     LOFT
     МЕБЕЛЪ 
    </Sld.h>
  <Sld.text>Современная и удобная мебель в Анапе</Sld.text>

  <Sld.btn>СМОТРЕТЬ КАТАЛОГ</Sld.btn>
  </Sld>
    <Img src={hero} />
    </div>
    <div>
    <Sld>
    <Sld.h>
     LOFT
     МЕБЕЛЪ 
    </Sld.h>
  <Sld.text>Современная и удобная мебель в Анапе</Sld.text>

  <Sld.btn>СМОТРЕТЬ КАТАЛОГ</Sld.btn> 

  </Sld>
    <Img src={hero} />
    </div>
    <div>
    <Sld>
    <Sld.h>
     LOFT
     МЕБЕЛЪ 
    </Sld.h>
  <Sld.text>Современная и удобная мебель в Анапе</Sld.text>
 
  <Sld.btn>СМОТРЕТЬ КАТАЛОГ</Sld.btn> 

  </Sld>
    <Img src={hero} />
    </div>
  </Carousel>
            </Content>

        </Container>
    )
}
