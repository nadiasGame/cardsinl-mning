

import Cards from './Cards';
import './CardStack.css';
function CardStack(props) {

  const { cards, setCard } = props;

  const cardComponent = cards.map((cards, index) =>{
    return <Cards card={ cards } key={ index } setCard={ setCard } />
})

return(
    <section className="cardStack">
        { cardComponent }
    </section>
)
}

export default CardStack;