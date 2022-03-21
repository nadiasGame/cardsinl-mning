


import '../App.css';
import '../components/Cardform.css'
import React, { useState } from 'react'

;


import Top from '../components/Top';
import CardForm from "../components/CardForm";
import Cards from "../components/Cards";


 function AddCard(props) {
    const [newCard, setNewCard]= useState ({});
    const [addCard, setAddCard]= useState ();

    return (
<main className= "bankcard">
<h1>{newCard} {setNewCard}</h1>
<h2>{addCard} {setAddCard}</h2>


<Top nameText="Add-card" addText="saved-card"/>  
<Cards cards={ props.newCard } setCards={ props.setNewCard }/>
<CardForm addCard={ props.addCard}setAddCards={ props.setAddCards } />

</main>
 
    )
    }

export default AddCard;
