



import '../App.css';
import React from 'react';



export default  function Home(props) {
   
console.log(props);
    
    return (
<main>
    {props.cards.map((card, i)=>(
        <p key={i} > {card.number} </p>
    ))} 
  

</main>
 
    )

}

