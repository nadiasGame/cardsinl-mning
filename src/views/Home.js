



import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import'../views/home.css';


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
     
     const [Card,setCard]= useState(makeCard);

const { cards } = props;
console.log(cards)
useEffect(()=> {
        if(cards.length > 0){
        setCard(cards[0])
    }
},[cards])
    return (
<section className='homeCss'>


<Top nameTitle="e-wallet" addName="active-card"/>  
<Cards Cards={ Card} setCard={ setCard }/>
<CardStack Cards={ Cards } setCard={ setCard} />
<button id='homeButton' onClick={()=> { navigate('/addcard')}}>add a new card</button>
</section >
    )
}



export default  Home;