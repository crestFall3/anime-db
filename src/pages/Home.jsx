import { useState, useEffect } from "react";
import AnimeCard from "../components/AnimeCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [animeList, setAnimeList] = useState([]);

  const fetchAnime = (query = "") => {
    const url = query
      ? `https://api.jikan.moe/v4/anime?q=${query}`
      : `https://api.jikan.moe/v4/top/anime`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnimeList(data.data));
  };

  useEffect(() => {
    fetchAnime();
    document.title = "Home - AnimeDB";
  }, []);
  return (
    <div>
    <h2>Welcome to AnimeDB, your number 1 anime database!</h2>
    <h1>Top Anime</h1>
      <div className="anime-grid">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
