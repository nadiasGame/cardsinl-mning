



import '../App.css';
import React from 'react';



 function Home(props) {
   
console.log(props.cards);
    
    return (
<main>

    { props.cards.map((card, i)=>(
        <p key={i} > {card.number} </p>
    ))} 
  

</main>
 
    )

}

export default  Home;