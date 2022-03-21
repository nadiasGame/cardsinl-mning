
import{useState} from 'react';
import './cards.css'

function Cards(props) {
  const [ cards, setCards]=props;
    //const [ Cards, setNewCards]=props;
    return (
    <h1 > { Cards },{ setCards} </h1>
    )
  };
export default Cards;
