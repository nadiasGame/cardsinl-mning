


import '../App.css';
import '../components/Cardform.css'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

import './addcard.css'


import Top from '../components/Top';
import CardForm from "../components/CardForm";
import Cards from "../components/Cards";


 function AddCard(props) {
       
    const makeCard={
        cardNumber:'',
        name:'',
        vaild:'',
        ccv:'',
       company:''
 };
 
    const [latestCard, setLatestCard]= useState (makeCard);
    const navigate= useNavigate ();
const {setCards}=props;


function handleOnKey(){
    setCards(latestCard)
    navigate('/Home')
};
    return (

<main className ="addCard">

<Top addTitle="Add-card" addText="saved-card"/>  
<Cards cards={ latestCard } />
<CardForm setCards={ setLatestCard} />
<button onClick={ handleOnKey } className="addButton">add card</button>
</main>
 
    )
}


export default AddCard;
