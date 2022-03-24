

import Cards from './Cards';
import './CardStack.css';

 function CardStack(props) {

  const {setCard } = props;

  const cardComponent = ((card, index) =>{
    return <Cards card={ card} key={ index } setCard={ setCard } />
}) 

return(
    <section className="cardStack">
        { cardComponent }
    </section>
)

}  

export default CardStack;