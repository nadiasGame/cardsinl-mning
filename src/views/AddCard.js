


import '../App.css';
import '../components/Cardform.css'
import React, { useState } from 'react'
;


import Top from '../components/Top';
import CardForm from "../components/CardForm";
import Cards from "../components/Cards";


 function AddCard(props) {
    const [selectedCards, setSelectedCards]= useState ({});
    const [addCard, setAddCard]= useState ();

    return (
<section className= "bankcard">
<h1>{selectedCards} {setSelectedCards}</h1>
<h2>{addCard} {setAddCard}</h2>


<Top nameText="Add-card" addText="saved-card"/>  
<Cards cards={ props.selectedCards } setCards={ props.setSelectedCards }/>
<CardForm addCard={ props.addCard}setAddCards={ props.setAddCards } />

</section>
 
    )
}

export default AddCard;
