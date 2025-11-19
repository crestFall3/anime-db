import { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import Pagination from "../components/Pagination";

export default function Trending() {
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    document.title = "Trending Anime - AnimeDB";

    fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setAnimeList(data.data);
        setTotalPages(data.pagination.last_visible_page);
      });
  }, [page]);

  return (
    <div className="page-container">
      <div className="top-hero">
        <h1>Trending Anime Right Now</h1>
      </div>
      <div className="anime-grid">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}
