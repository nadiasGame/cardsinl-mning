

function CardStack(props) {
    const { selectedCardStack, setSelectedCardStack }=props;
    return (
    <h1> { selectedCardStack},{ setSelectedCardStack }</h1>
    )
  };
export default CardStack;