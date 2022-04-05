

import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';




import Cards from '../components/Cards';
import CardStack from '../components/CardStack';
import Top from '../components/Top';



 function Home(props) {
    const navigate=useNavigate();
    
   const makeCard={
            cardNumber:'',
            name:'',
            vaild:'',
            ccv:'',
           company:''
     };
     
     const [selectedCard,setSelectedCard]= useState(makeCard);

const { cards } = props;
console.log(cards)

useEffect(()=> {
        if(cards.length > 0){
        setSelectedCard(cards[0])
    }
},[cards])
    return (
<section className='homeContainer'>


<Top nameTitle="e-wallet" addName="active-card"/>  
<Cards Card={ selectedCard} setCard={ setSelectedCard }/>
<CardStack Card={ Cards } setCard={ setSelectedCard} />
<button id='homeButton' onClick={()=> { navigate('/AddCard')}}>add a new card</button>
</section >
    )
}






export default  Home;