import "./Cart.css"
import { useState } from 'react';
import Tovar from "./Tovars/Tovars"

function Cart(props) {

  
  
  
  
  const [oform, setOform] = useState(false);


  let tovars = [
    {id: "1", name: "зхзх", cost: "11221", img: ""},
    {id: "2", name: "з12х", cost: "1345345", img: ""},
  ]

  

  let styleOverflow = {}
  let styleSideBlock = {}

  if (props.openCart == true) {
    styleOverflow = { width: '100%' };
    styleSideBlock = { width: '385px' };
  }
  else {
    styleOverflow = { width: '0' };
    styleSideBlock = { width: '0' };
  }

  let content = oform ? <div><h1>Корзина</h1>
    <img src="./img/Group91(1).svg" className="Close" onClick={() => props.openCart(false)}></img>
    <div className="poloska"></div>

    <div className="TovarOformlenDiv" >
      <img className="TovarOformlen" src="./img/image12.svg" alt="" />
      <a href="#"  onClick={() => setOform(false)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        назад
      </a>
      <p><b>Заказ оформлен!</b></p>
      <p style={{
        color: "grey",
        textAlign: "center",
      }}>Ваш заказ скоро будет передан вам на аккаунт steam</p>
    </div>

  </div> : <div><h1>Корзина</h1>
    <img src="./img/Group91(1).svg" className="Close" onClick={() => props.onCloseCart(true)}></img>
    <div className="poloska"></div>

            {/* Товар */}
            
            <div className="MainCards">
                {
                    tovars.map(tovar => {
                        return <Tovar name={tovar.name} cost={tovar.cost} img={tovar.img} addProdToCart={(newProd) => props.addProdToCart(newProd)} />
                    })
                }
            </div>
    {/* :
    <>
    
    {items}
    </> */}
    
    
    

    <p style={{
      bottom: "10%",
      right: "42%",
      position: "absolute",
    }}>Итого: </p>

    <a  href="#" onClick={() => setOform(true)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Купить
    </a></div>

  return (
    <>
      <div className="OverFlow" style={styleOverflow} onClick={() => props.onCloseCart(true)}></div>
      <div className="SideBlock" style={styleSideBlock}>

        {content}


      </div>
    </>
  )
}

export default Cart;