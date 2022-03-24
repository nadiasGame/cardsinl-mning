
import bitcoinLogo from '../Assets/chip-dark.svg';
import ninjaLogo from '../Assets/vendor-ninja.svg';
import blockLogo from '../Assets/vendor-blockchain.svg';
import evilLogo from '../Assets/vendor-evil.svg';
import chip from '../Assets/chip-light.svg';


import './cards.css'

function Card(props) {
  const { card, setCard}=props;
  var cardLogo;
  

    const chipImage = chip;


    var cardClass = "card";
console.log(card);


if (card){//gör en if sats om korten är tomma så...
    card=(setCard)

     if (card.company === "bitcoin"){
        cardLogo = bitcoinLogo
       


    } else if(card.company === "blockchain"){
        cardLogo = blockLogo
        

    } else if(card.company === "ninja") {
        cardLogo = ninjaLogo
       

    } else if(card.company === "evilcorp"){
        cardLogo = evilLogo
        

    } else if(card.company === ""){
        cardLogo = bitcoinLogo

    } 
}
    function changeCard(){
        setCard(card)
    }
    return (
      <section className={ cardClass } onClick={ changeCard }>

      <img className='cardLogo' src={ cardLogo } alt="logga"/>
      <img className='chipImg' src={ chipImage } alt="chipImg"/>
      
      <p id="cardNumberText">{ card ? card.cardNumber : "0000 0000 0000 0000" }</p>
      <p id="cardHolderName">CARDHOLDER NAME</p>
      <p id="cardNameText">{ card ? card.name : "Firstnamn lastname" }</p>
      <p id="validThru">VALID THRU</p>
    
      <p id="cardValidText">{ card ? card.valid : "MM/YY" }</p>
        
  </section>

)
}
    
export default Card;
