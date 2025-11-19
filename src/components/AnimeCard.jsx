import { Link } from "react-router-dom";
import '../styles/card.css';


export default function AnimeCard({ anime }) {
  return (
    <Link to={`/anime/${anime.mal_id}`} className="anime-card">
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <h3>{anime.title}</h3>
      <p className="score">⭐ {anime.score || "N/A"}</p>
    </Link>
  );
}
