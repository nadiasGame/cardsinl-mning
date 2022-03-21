

import './Cardform.css';
import{useRef} from 'react';




 function CardForm(props) {
  
   
    
   

    const numberEl = useRef(null);
    const nameEl = useRef(null);
    const validEl = useRef(null);
    const ccvEl = useRef(null);
    const companyEl = useRef(null);
   
    const {setCards}=props;
     
function handleCards(){
  
 
   
    const makeCard={
        cardNumber:numberEl.current.value,
        name:nameEl.current.value,
        valid:validEl.current.value,
        ccv:ccvEl.current.value,
        company:companyEl.current.value
       }
      setCards(makeCard)
}
  




    
     return(  
      
      

   <form className="cardAdd">

        <label id='number'>Card Number
        <br></br>
        <input id='numberInput'className="inputCss" type='text'inputref={ numberEl } maxLength="18" minLength="15" onChange={ handleCards }/>
         </label>
        
        <label id='nameText'>Card Holder Name 
        <br></br>

       <input id="nameInput" className="inputCss" type='text' ref={ nameEl } onChange={ handleCards }/>
       </label>
            
             <label id='ccvText'>Ccv<br></br>
          <input  id='ccvInput' type='text'ref={ ccvEl } className="inputFieldHalfSize" maxLength="3" onChange={ handleCards }/>
          </label>
        <label id='validText'>Valid Tru<br></br>

        <input  id='validInput' type='text'ref={ validEl } className="inputFieldHalfSize" maxLength="5" onChange={ handleCards }/>
        </label>
        <label id="vendorText">Vendor<br/>
        
        </label>
        </form>
        
    
      
    )
  }
  export default CardForm;