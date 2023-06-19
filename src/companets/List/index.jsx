import React from "react";
import { Container, Contant,Img,Close } from "./style";
import { useStoreg } from '../../context/Storeg';


export default function List({value}) {
  const [store, setStore] = useStoreg()
    const removeItem = (id) => {
        console.log(id)
        let carts = JSON.parse(localStorage.getItem('loft'))
        if (carts) {
            debugger
            let filter = carts.filter(item => item.id != id);
            if (filter.length > 0) {
                localStorage.setItem('loft', JSON.stringify(filter))
            }
            else{
                localStorage.removeItem('loft')
            }
            setStore(!store)
        }
    }

  return (
    <Container>
      <Contant>
        <Img src={value?.url}/>
       
       <Contant.Dif>
         <Contant.Title>{value?.name}</Contant.Title> 
        <Contant.Count>Количество: {value?.count}</Contant.Count>
        </Contant.Dif>
<Contant.Dif>
     <Contant.Num>{value?.price}₽</Contant.Num>
        <Contant.Coun>Размер(Ш×Д×В):  {value?.width} СМ × {value?.depth} СМ × {value?.height} СМ</Contant.Coun> 
</Contant.Dif>
    
       
      
       
      </Contant>
      <Close  onClick={() => removeItem(value.id)} >&#215;</Close>
    </Container>
  );
}
