import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>cardStack</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/cardstack">Cardstack</Link> |{" "}
        <Link to="/cards">Cards</Link>
        <Link to="/top">Top</Link>
        <Link to="/cardform">CardForm</Link>
      </nav>
      <Outlet/>
    </div>
  );
}


