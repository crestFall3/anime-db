import { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";

export default function Seasonal() {
  const [animeList, setAnimeList] = useState([]);
  const [season, setSeason] = useState("fall"); // winter/spring/summer/fall
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    document.title = `Seasonal Anime - ${season} ${year}`;

    fetch(`https://api.jikan.moe/v4/seasons/${year}/${season}`)
      .then(res => res.json())
      .then(data => setAnimeList(data.data));
  }, [season, year]);

  return (
    <div className="page-container">
      <h1 className="page-title">{`${season.charAt(0).toUpperCase() + season.slice(1)} ${year} Anime`}</h1>
      
      {/* Optional season/year selection */}
      <div className="season-select">
        <select value={season} onChange={(e) => setSeason(e.target.value)}>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
        </select>
        <input 
          type="number" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          min="2000" max={new Date().getFullYear()+1}
        />
      </div>

      <div className="anime-grid">
        {animeList.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
