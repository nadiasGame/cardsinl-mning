

import {useState} from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css'




import Home from "./views/Home";
import AddCard from "./views/AddCard";



function App() {
  

  const  [cards, setCards] = useState([]);



  function addNewCard(card){
    console.log('new card  added', card);
    setCards ((oldCards) => {
      oldCards.push(card)
      return oldCards;
    })
  }
 

  return(
 
<div className="App">
   
  <Routes>
      <Route path="/" element={<App />} />
  
      <Route path="/Home" element={<Home cards={cards} setCards={ setCards }/>} />
      <Route path="/AddCard" element={<AddCard setCards= {addNewCard}/>} />

      
    </Routes>
    </div>
  );
}
    


export default App;