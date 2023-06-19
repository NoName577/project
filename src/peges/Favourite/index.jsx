import React,{useState,useEffect} from "react";
import axios from "axios";
import { Container, Row, Content,Empty,Menu } from "./style";
import Card from "../../companets/Card";
import {Link} from "react-router-dom";
export default function Favourite() {
  const [render, setRender] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6427fbdc46fd35eb7c492488.mockapi.io/student", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        let active = res.data.filter(res => res.active == true);
        setData(active)
      })
      .catch(error => console.log(error))
  }, [render])
  return (
    <Container>
      <Content>
      <Menu>  <span><Link to={'/'}>Главная </Link> /  Гостинные  /  Мягкая мебель  /  Диваны  </span>
      </Menu>
        <Row>
          {
            data.length>0?
            data.map(item=><Card setRender={setRender} key={item.id} value={item}/>)
            :
            <Empty className={data.length>0?"favourite":""}/>
          }
          </Row>
      </Content>
    </Container>
  );
}
