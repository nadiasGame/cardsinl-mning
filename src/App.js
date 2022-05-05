import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import AddCard from './views/AddCard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cards" element={ <Home /> } />
          <Route path="/addcard" element={ <AddCard /> } />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;