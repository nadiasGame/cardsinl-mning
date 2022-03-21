

import './Cardform.css';
import{useState} from 'react';
import { Link } from 'react-router-dom';



 function CardForm(props) {
   const [newCard,setNewCard]=useState({
cardHolderName:'',
number:'',
name:'',
vaild:'',
ccv:'',
id:null

    });

   

    /* const cardHolderNameEl = useRef(null);
    const nameEl = useRef(null);
    const validEl = useRef(null);
    const ccvEl = useRef(null);
    const companyEl = useRef(null);
   
       
     
function handleOnKeyUp(){
  
 
   
    const addcardObj=[{
        cardHolderName:cardHolderNameEl.current.value,
        name:nameEl.current.value,
        valid:validEl.current.value,
        ccv:ccvEl.current.value,
        company:companyEl.current.value
       }]
       props.setAddcard(addcardObj);
   */




    
     return(  
      
      
<main>
   <div>CardForm</div>

        <label htmlFor='number'>ID:/</label>
        <input onChange={(e)=>setNewCard({...newCard, id: e.target.value})} style={{width:'50px'}} id="number" type="number"></input>
        
        <label htmlFor='name'>Name:</label>
            <input onChange={(e) => setNewCard({...newCard, name: e.target.value})} id="name" type="text"></input>
            
             <label htmlFor='ccv'>Ccv:</label>
          <input  onChange={(e)=> setNewCard({...newCard, ccv: e.target.value})} id="ccv" type="text"></input>
      
        <label htmlFor='valid'>Valid:</label>

        <input  onChange={(e)=> setNewCard({...newCard, valid: e.target.value})} id="valid" type="text"></input>
        
        <input onClick={() => props.setCards(newCard)} type="button" value="ADD-CARD"></input>
            <Link to="/">HOME</Link>
        
       
       
        
         </main>
       
      
    )
  }
  export default CardForm;