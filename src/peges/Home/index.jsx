import React, { useEffect, useState } from 'react'
import { Container ,Contant ,Row,Title} from './style';
import Slider from '../../companets/Sort';
import Card from '../../companets/Card';
import axios from 'axios';
import { useActive } from '../../context/Active';
export default function Home() {
     const [data,setData] = useState([])
     const [render,setRender] =useState(false)
     const [active,setActive] =useActive()
useEffect(() =>{
  axios.get("https://6427fbdc46fd35eb7c492488.mockapi.io/student"  ,{
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then(res=>{
    setData(res.data)
    setActive(!active)
  })
  .catch(error=>console.log(error))
},[render])

  return (
   <Container>
    <Contant>
      <Slider/>
      <Title>Хиты продаж</Title>
      <Row>
        {
      data.map(item=><Card setRender={setRender} key={item.id} value={item}/>)
     }
      </Row>
    </Contant>
   </Container>
  )
}