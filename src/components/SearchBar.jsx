import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/searchbar.css'

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search/${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        placeholder="Search anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
