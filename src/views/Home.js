



import '../App.css';
import React,{useState} from 'react';

import Top from '../components/Top';
import CardStack from "../components/CardStack";
import Cards from "../components/Cards";


export default  function Home(props) {
   

    const  [selectedCards, setSelectedCards] = useState();
 
    const [selectedCardStack, setSelectedCardStack]= useState({});


    return (
<section className="home">
    <h1>{selectedCardStack} {setSelectedCardStack}</h1>
    <h2>{selectedCards} {setSelectedCards}</h2>
{/* //hämta från top components */}
<Top  nameTitle="e-wallet" addName="active card"/>  
<Cards cards={ props.selectedCards } setCard={ props.setSelectedCards }/>
<CardStack cardsstack={ props.selectedCardStack} setCards={ props.setSelectedCardStack }/>

</section>
 
    )
}

