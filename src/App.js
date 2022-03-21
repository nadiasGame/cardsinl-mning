

import {useState,useEffect} from "react";
import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';
import './App.css'




import Home from "./views/Home";
import AddCard from "./views/AddCard";
import Cards from "./components/Cards";


function App() {
  

  const  [newCards, setNewCards] = useState([]);



  function addCard(newCard){
    console.log('new card  added', newCard);
    setNewCards (cards => [...cards, newCard]);
  }
    useEffect(()=> {console.log(newCards)}, [newCards]);
   
  
 

  return(
 

   <Router>
  <Routes>
      <Route path="/" element={<App />} />
  
      <Route path="/Home" element={<Home newcards={newCards} />} />
      <Route path="/AddCard" element={<AddCard setaddCards= {addCard}/>} />
      <Route path="/Cards" element={<Cards setCards= {Cards}/>} />
     
     
      
    </Routes>
    </Router>
 

  );
}
    


export default App;