import { NavLink, Outlet} from "react-router-dom";
import { getCards } from "../data";



export default function Cards() {
  let cards = getCards();
    return (
      <div style={{ display: "flex" }}>
         <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
    >
      {cards.map((cardStack) => (
        <NavLink
          style={({ isActive }) => {
          return {
              display:"block",
              margin:"1 rem 0",
              color: isActive ? "red" :"",

          };
        
        }}
    
          to={`/cards/${cardStack.number}`}
          key={cardStack.number}
        >
          {cardStack.name}
        </NavLink>
      ))}
    </nav>
    <Outlet />
       </div>
    )};