import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CirclePlay } from "lucide-react";
import { NavLink } from "react-router-dom";
import MoviePlayer from "./MoviePlayer";
export default function MovieDetails() {
  const { movieID } = useParams();
  const API_KEY = "57eadc399864ae7bab8f6e17ec62c0b8";
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPlay, setShowPlay] = useState(false);
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
      setMovie(data);

      const toplayername = data.title.toLowerCase().replace(/\s/g, '');
      console.log(toplayername);
      
      setPlayerName(toplayername);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, [movieID]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (!movie) return <div className="text-red-500 p-8">Movie not found.</div>;

  return (
    <div className="min-h-screen bg-[#121212] text-white px-8 py-12 flex flex-col items-center">
      <div
        className="relative w-[300px] mb-8 rounded-xl overflow-hidden shadow-lg group"
        onMouseEnter={() => setShowPlay(true)}
        onMouseLeave={() => setShowPlay(false)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        {/* Animated black tint */}
        <NavLink to={`/movieplayer/${playerName}`}>
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ease-in-out ${showPlay ? 'opacity-100' : 'opacity-0'
              }`}
          />

          {/* Animated play button */}
          <div
            className={`absolute inset-0 flex items-center cursor-pointer justify-center transition-all duration-200 ease-in-out ${showPlay ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
          >
            <CirclePlay size={64} color="#00f0ff" />
          </div>
        </NavLink>
      </div>

      <h1 className="text-4xl font-bold text-[#00f0ff] mb-2">{movie.title}</h1>
      <p className="text-[#888] text-lg mb-4 italic">{movie.tagline}</p>
      <p className="max-w-2xl text-center text-[#ccc] mb-6">{movie.overview}</p>
      <div className="flex gap-6 text-[#aaa] text-sm">
        <span><strong>Release:</strong> {movie.release_date}</span>
        <span><strong>Runtime:</strong> {movie.runtime} min</span>
        <span><strong>Rating:</strong> ⭐ {movie.vote_average}</span>
      </div>
    </div>
  );
}
