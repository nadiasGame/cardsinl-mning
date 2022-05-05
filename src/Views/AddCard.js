import CardForm from "../components/CardForm";
import Top from "../components/Top";


export default function AddCard(){
    return(
        <div>
            <Top title={'ADD A NEW BANK CARD'} cardState={'New card'} />
            <CardForm />
        </div>
    )
}

