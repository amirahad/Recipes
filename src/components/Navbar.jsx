import { Link } from "react-router-dom";
import { useContext } from "react";
import "./navbar.css";
import SearchBar from "./SearchBar";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { color } = useContext(ThemeContext)
  return (
    <div className="navbar" style={{background: color}}>
      <nav>
        <Link to="/" className="brand">
          <h1>RECIPES</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
