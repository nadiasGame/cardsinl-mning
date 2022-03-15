import { render } from "react-dom";
import { BrowserRouter,Routes,Route,} from "react-router-dom";

import App from "./App";
import CardForm from "./components/CardForm";

import Top from "./components/Top";
import CardStack from "./components/CardStack";
import Home from "./views/Home";
import AddCard from "./views/AddCard";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="cardform" element={<CardForm />} />
      <Route path="top" element={<Top />} />
      <Route path="cardstack" element={<CardStack />} />
      <Route path="home" element={<Home />} />
      <Route path="addcard" element={<AddCard />} />
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>choose a card</p>
          </main>
        }
      />
      <Route path=":cardStackId" element={<CardStack />} />
      <Route path="*" element={ <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
  );
