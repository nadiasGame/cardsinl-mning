import { useParams } from "react-router-dom";
import { getCardStack} from "../data";

export default function CardStack() {
    let params = useParams();
    let cardstack = getCardStack(parseInt(params.cardId, 10));
    return (
      <main style={{ padding: "1rem 0" }}>
          
        <h2>CardStack: {params.cardId}</h2>

    <p>{cardstack.name}: {cardstack.number}</p>
      </main>
    );
  }