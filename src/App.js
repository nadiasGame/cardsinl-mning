

import {useState} from "react";
import './App.css'

import { Routes,Route,} from "react-router-dom";


import Home from "./views/Home";
import AddCard from "./views/AddCard";


function App() {
  

  const  [selectedCards, setSelectedCards] = useState(0);
 


  function addCard(card){
    const newCards=selectedCards.concat(card);
    setSelectedCards(newCards);
  }
 

  return(
  <div className="App">

 
  <Routes>
      <Route path="/" element={<App />} />
  
      <Route path="/home" element={<Home />} />
      <Route path="/addcard" element={<AddCard addCard= {addCard}/>} />
     
     
      
    </Routes>
 
  </div>)
};
    


export default App;