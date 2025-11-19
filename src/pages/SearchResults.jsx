import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import Pagination from "../components/Pagination";

export default function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
  const fetchData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&page=${page}`
    );
    const data = await res.json();

    setResults(data.data);
    setTotalPages(data.pagination.last_visible_page);
  };

  fetchData();
  document.title = `Search Results for "${query}" - AnimeDB`;
}, [query, page]);


  return (
    <div className="page-container">
      <h1 className="page-title">Search Results for "{query}"</h1>

      <div className="anime-grid">
        {results.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}
