



import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import'./home.css';


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
     
     const [newCard,setNewCard]= useState(makeCard);

const { cards } = props;
console.log(props.cards)
useEffect(()=> {
        if(cards.length > 0){
        setNewCard(cards[0])
    }
},[cards])
    return (
<main className='homeCss'>


<Top nameTitle="e-wallet" addName="active-card"/>  
<Cards Cards={ newCard } setCard={ setNewCard }/>
<CardStack Card={ Cards } setCards={ setNewCard} />
<button id='homeButton' onClick={()=> { navigate('/addcard')}}>add a new card</button>
</main> 
    )
}



export default  Home;