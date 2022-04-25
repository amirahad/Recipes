import "./searchBar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="search">Search:</label> */}
        <input
          placeholder="Search"
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
