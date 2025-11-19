import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/details.css'
export default function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const json = await res.json();
      setAnime(json.data);
    })();
  }, [id]);

  if (!anime) return <div className="page-container">Loading...</div>;

  return (
    <div className="page-container details-page">
      <div className="details-grid">
        <aside className="details-aside">
          <img src={anime.images.jpg.large_image_url} alt={anime.title} className="poster"/>
          <div className="meta">
            <h3>{anime.title}</h3>
            <p><strong>Type:</strong> {anime.type}</p>
            <p><strong>Episodes:</strong> {anime.episodes ?? "?"}</p>
            <p><strong>Score:</strong> {anime.score ?? "N/A"}</p>
            <p><strong>Year:</strong> {anime.year ?? "—"}</p>
            <div className="genres">
              {anime.genres?.map(g => <span key={g.mal_id} className="genre">{g.name}</span>)}
            </div>
          </div>
        </aside>

        <main className="details-main">
          <h1>{anime.title}</h1>
          <p className="synopsis">{anime.synopsis}</p>

          {/* example: trailer from anime.trailer.youtube_id */}
          {anime.trailer?.embed_url && (
            <div className="trailer">
              <iframe src={anime.trailer.embed_url} title="Trailer" frameBorder="0" allowFullScreen />
            </div>
          )}

          {/* placeholder for characters/recommendations */}
          {/* <section className="recommendations">
            <h2>Recommendations</h2> */}
            {/* fetch or show similar anime cards */}
          {/* </section> */}
        </main>
      </div>
    </div>
  );
}
