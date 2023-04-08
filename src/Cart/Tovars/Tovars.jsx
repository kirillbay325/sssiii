import React from "react";
import { useState } from 'react';


function Tovars(props){
  

  

    return ( 
        <> 
       
       <div className="MainProduct">
      <img src="https://sun9-40.userapi.com/impg/mnXvG8pVxR1lbpKlVjS64Xpc4rO1zdPYVZAqCA/ElGMYLxuFKU.jpg?size=539x604&quality=95&sign=4e9f892ed15e6e84a302e474f92547ea&c_uniq_tag=y95uQ53QNPy8Olxq91vdPum-ySG8nfe08txqTIAJcXQ&type=album" className="kartinka_card_basket"></img>
      <p className="TextProduct">{props.name}<br/>{props.cost}</p>
      
      <img src="./img/Group110.svg" className="Plus"></img>
      <img src="./img/Group91(1).svg" className="Close"></img>
      <img src="./img/Group111.svg" className="Minus"></img>
      <input type={"text"}  className="Number" style={
        {
          width: "15%",
          left: "72%",
        }
      }></input>
    </div>
        
           </>
         ); 
        
        }
        
       export default Tovars