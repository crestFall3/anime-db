import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";
import "../styles/navbar.css";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <nav className="navbar">
      <h2>
        <Link to="/">AnimeDB</Link>
      </h2>
      <ul>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
        <li>
          <Link to="/seasonal">Seasonal</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <SearchBar onSearch={setQuery} onSubmit={handleSubmit} />
    </nav>
  );
}
