import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Container, Content, Item, Logo, Input, From, Icons,Heart, Cart } from './style'
import logo from '../../assents/img/LOGO.png'
import Search from '../../assents/img/search-icon.png'
import iphone from '../../assents/img/phone.png'
import delivery from '../../assents/img/delivery-icon.png'
import bag from '../../assents/img/bag.png'
import profil from '../../assents/img/profile-icon.png'
import { useActive } from '../../context/Active'
import { useStoreg } from '../../context/Storeg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [active,setActive] =useActive()
    const [data,setData] = useState([])
    const [local,setLocal] = useState(false);
    const [store,setStore] = useStoreg();
    useEffect(()=>{
        let res = JSON.parse(localStorage.getItem('loft'));
        if(res){
          setLocal(true)
        }
        else{
          setLocal(false)
        }
      },[store])
      


useEffect(() =>{
 axios.get("https://6427fbdc46fd35eb7c492488.mockapi.io/student"  ,{
   headers:{
     "Content-Type":"application/json"
   }
 })
 .then(res=>{
    let active =res.data.filter(res=>res.active==true)
    setData(active)
    setActive(!active)

})
 .catch(error=>console.log(error))
},[active])
console.log(data)
    return (
        <Container>
            <Content>
                <NavLink to='/home'><Logo src={logo} /></NavLink>
                <NavLink to='/home'><Item>Главная</Item></NavLink>
                <NavLink to='/about'><Item>О нас</Item></NavLink>
                <NavLink to='/contact'><Item>Контакты</Item></NavLink>

                <Input>
                    <Input.img src={Search} />
                    <Input.text placeholder='Поиск' >
                    </Input.text>
                </Input>
                <From>
                    <From.imgs src={iphone} />
                    <From.text>8 (964) 89 99 119</From.text>
                    <From.img src={delivery} />
                    <From.text>Доставка</From.text>
                </From>
                <Icons>
                    <Link to={'/favourite'}>
                    <Heart className={data.length>0?"favourite":""}/>
                    </Link>
                    <Cart>
                    <Link to={"/packet"}><Icons.img src={bag} /></Link>
                {
                    local&&<Cart.Icon/>
                }
                    </Cart>
                    <Icons.img src={profil} />
                </Icons>
            </Content>

        </Container>
    )
}
