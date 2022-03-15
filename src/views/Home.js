

import {data} from "../data";
import { Link, Outlet } from "react-router-dom";
import '../'


function Home() {
   
  
    return (
        <div>
        <h1>E-Wallet</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
        
          <Link to="/cards">Cards</Link>
        <br></br>
          <Link to="/addcard">AddCard</Link>
         
        </nav>
     
        <Outlet/>
      </div>
    )
}


export default Home;