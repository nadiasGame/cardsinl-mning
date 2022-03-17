


function Cards(props) {

    const { selectedCards, setSelectedCards}=props;
    return (
    <h1 className="cards" > { selectedCards },{ setSelectedCards} </h1>
    )
  };
export default Cards;
