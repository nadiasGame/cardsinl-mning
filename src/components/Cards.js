
import bitcoinLogo from '../Assets/chip-dark.svg';
import ninjaLogo from '../Assets/vendor-ninja.svg';
import blockLogo from '../Assets/vendor-blockchain.svg';
import evilLogo from '../Assets/vendor-evil.svg';
import chip from '../Assets/chip-light.svg';


import './cards.css'

function Cards(props) {
  const { cards, setCards}=props;
  var cardsLogo;

    const chipImage = chip;
    var cardsClass = "card";

    if (cards.company === "bitcoin"){
        cardsLogo = bitcoinLogo
        cardsClass += " bitcoin"

    } else if(cards.company === "blockchain"){
        cardsLogo = blockLogo
        cardsClass += " blockchain"

    } else if(cards.company === "ninja") {
        cardsLogo = ninjaLogo
        cardsClass += " ninja"

    } else if(cards.company === "evilcorp"){
        cardsLogo = evilLogo
        cardsClass += " evilcorp"

    } else if(cards.company === ""){
        cardsLogo = bitcoinLogo

    }

    function changeCard(){
        setCards(cards)
    }
console.log(cards.valid);
    //const [ Cards, setNewCards]=props;
    return (
      <section className={ cardsClass } onClick={ changeCard }>
      <img className='cardLogo' src={ cardsLogo } alt="logga"/>
      <img className='chipImg' src={ chipImage } alt="chipImg"/>
      <p id="cardNumberText">{ cards.cardNumber ? cards.cardNumber : "0000 0000 0000 0000" }</p>
      <p id="cardHolderName">CARDHOLDER NAME</p>
      <p id="cardNameText">{ cards.name ? cards.name : "Firstnamn lastname" }</p>
      <p id="validThru">VALID THRU</p>
    
      <p id="cardValidText">{ cards.valid ? cards.valid : "MM/YY" }</p>
        
  </section>

)
}
    
export default Cards;
