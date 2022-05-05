import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Chip, colorAndLogo } from "../components/CardForm";
import CardStack from "../components/CardStack";
import Top from "../components/Top";

export default function Home (){
    let selectedCard = localStorage.getItem('selected-card');
    selectedCard = JSON.parse(selectedCard);

    return(
        <div className="container">
            <Top title={'E-WALLET'} cardState={'Active card'} />
            {selectedCard !== null && 
                <Card
                    color={selectedCard.color}
                    chip={<Chip />}
                    logo={colorAndLogo[selectedCard.logo].logo}
                    number={selectedCard.number}
                    name={selectedCard.name}
                    date={selectedCard.date}
                />
            }
            
            <CardStack />
            <Link
                to="/addcard"
                style={{ textDecoration: 'none' }}
                className="addCard-btn"
            >
                Add a new card
            </Link>
        </div>
    )
}