

import './Cardform.css';
import{useState, useRef} from 'react';



 function CardForm(props) {

 
  
    const [addcard, setAddcard]=useState ({});

    const cardHolderNameEl = useRef(null);
    const nameEl = useRef(null);
    const validEl = useRef(null);
    const ccvEl = useRef(null);
    const companyEl = useRef(null);
   
       
     
function handleOnKeyUp(){
  
 
   
    const addcardObj={
        cardHolderName:cardHolderNameEl.current.value,
        name:nameEl.current.value,
        valid:validEl.current.value,
        ccv:ccvEl.current.value,
        company:companyEl.current.value
       }
       setAddcard(addcardObj);
  



}
    
     return(  
      
      
<div className="Cardform">
    <form> 
        <input  type="text" placeholder="CARD NUMBER" ref={cardHolderNameEl} onKeyUp={ handleOnKeyUp } />
        <br></br>
        <input type="text" placeholder="NAME" ref={nameEl} onKeyUp={ handleOnKeyUp } />
        <br></br>
        <input className="valid" type="VALID THRU" ref={validEl} onKeyUp={ handleOnKeyUp } />
             <br></br>
        <input  type="CCV" placeholder="ccv" ref={ccvEl}onKeyUp={ handleOnKeyUp } />
        <br></br>
        <input type="VENDOR" placeholder="addcard" onKeyUp={ handleOnKeyUp } />
        <br></br>
        <button type="ADD CARD" placeholder="addcard" onKeyUp={ handleOnKeyUp } />
       
       
       
         </form>
         </div>
       
      
    );
  }
  export default CardForm;