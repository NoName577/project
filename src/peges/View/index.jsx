import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Img,Stars,Star, Title, Name, Detaels,Sizes, Comments,Nav,Menu,Heart } from './style'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Starss from '../../assents/img/Vector.png'
import Card from '../../companets/Card';
import { useActive } from '../../context/Active'
export default function View() {
  const [active,setActive] =useActive()
  const [data,setData]=useState({});
  const [product,setProduct]=useState([]);
  const[render,setRender] = useState(false)
  const params = useParams();
useEffect(()=>{
      axios.get(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${params?.id}`,{
          headers:{
        "Content-Type":"application/json"
      }
      }).then(res=>{
        setData ({...res.data})
        setActive(!active)
      })
      .catch(error=>console.log(error))
    
},[params?.id])



useEffect(() =>{
  axios.get("https://6427fbdc46fd35eb7c492488.mockapi.io/student"  ,{
    headers:{
      "Content-Type":"application/json"
    }
  }).then(res=>
    {
      setProduct(res.data)
      setActive(!active)
    })
  .catch(error=>console.log(error))
  
},[render])




  return (
<Container> 
  <Menu style={{
  color: '#969696'}}>  <span><Link to={'/'}>Главная </Link> /  Гостинные  /  Мягкая мебель  /  Диваны  </span></Menu>
<Row>
  <Col style={{textAlign:"center"}}>
    <Img src={data?.url}/>
  </Col>
  <Col>
   <Stars>
   <Star src={Starss} />
    <Star src={Starss} />
    <Star src={Starss} />
    <Star src={Starss} />
    <Star src={Starss} />
   </Stars>
   <Title>{data?.name}</Title>
   <Name>{data?.title}</Name>
   <Detaels>
    <Detaels.Price>{data?.price}₽</Detaels.Price>
    <Detaels.Button>Купить</Detaels.Button>
    <Heart className={data?.active ? "favourite":""}/>
    <Detaels.Text>Добавить в желаемое</Detaels.Text>
   </Detaels>
   <Sizes>
<Sizes.Title>Размер (Д × Ш × В)</Sizes.Title>
<Sizes.Text>{data?.width} СМ × {data?.depth} СМ × {data?.height} СМ </Sizes.Text>
   </Sizes>
   <Comments>
    <Comments.Title>Описание</Comments.Title>
    <Comments.Text>Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс». Сдержанный скандинавский дизайн украсит любую современную обстановку. Элегантность, комфорт и функциональность, собранные воедино – «Динс» просто создан для размеренного отдыха в кругу семьи или компании друзей!</Comments.Text>
   </Comments>
  </Col>
</Row>
<Nav>Хиты продаж</Nav>
<Row>
{
      product.map(item=><Card setRender={setRender} key={item.id} value={item}/>)
     }
</Row>
</Container>
  )
}

