


import '../App.css';

import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';




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


function handleSubmit(){
    setCards(latestCard)
    navigate('/home')
};
    return (

<section className ="addCardCointainer">

<Top addTitle="Add-card" addText="new-card"/>  
<Cards cards={ latestCard } />
<CardForm setCards={ setLatestCard} />
<button onClick={ handleSubmit } className="addButton">add card</button>
</section>
 
    )
}


export default AddCard;
