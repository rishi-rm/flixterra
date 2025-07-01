import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleX } from "lucide-react"

function MovieCard({ movie, genreMap, fav, setFav, favMapIDs, setFavMapIds }) {
  const [showFav, setShowFav] = useState(false)


  return (
    <div className="bg-[#1e1e1e] text-[#f2f2f2] rounded-xl shadow-md overflow-hidden w-[300px] h-[350px] flex flex-col border border-[#333] hover:border-[#00f0ff] transition-all duration-300 hover:scale-105"
      onMouseEnter={() => { setShowFav(true) }}
      onMouseLeave={() => { setShowFav(false) }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-[60%] w-full object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <Link to={`/movieDetails/${movie.id}`}>
          <h1 className="text-lg font-bold mb-1 hover:underline cursor-pointer select-none">
            {movie.title}
          </h1>
        </Link>
        <p className="text-sm text-[#888] mb-1">
          <strong className="text-[#f2f2f2]">Release:</strong> {movie.release_date}
        </p>
        <div className="text-sm text-[#888]">
          <strong className="text-[#f2f2f2]">Genre:</strong>{" "}
          <div className="flex justify-between">
            <div>
              {movie.genre_ids.map((id, index) => (
                <span key={index}>
                  {genreMap[id] || "Unknown"}{index !== movie.genre_ids.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
            {(showFav && !favMapIDs.get(movie.id)) &&
              <div className="h-12 w-12 relative bottom-7 left-2 cursor-pointer hover:opacity-70 transition-opacity duration-300"
                title="Add to favorites"
                onClick={() => {
                  const updatedMap = new Map(favMapIDs)
                  updatedMap.set(movie.id, true)
                  setFavMapIds(updatedMap)
                  const updatedFav = [...fav, movie]
                  setFav(updatedFav)
                  localStorage.setItem("FavMovies", JSON.stringify(updatedFav))
                  console.log(movie.title, "added to favorites")
                }}
              ><img src="/favorites.png" alt="" /></div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export function FavMovieCard({ movie, fav, setFav, favMapIDs, setFavMapIds }) {
  const [showFav, setShowFav] = useState(false);
  const removeFav = (movieID) => {
  const updatedFavMap = new Map(favMapIDs)
  updatedFavMap.delete(movieID)
  setFavMapIds(updatedFavMap)

  const updatedFav = fav.filter(movie => movie.id !== movieID)
  setFav(updatedFav)

  localStorage.setItem("FavMovies", JSON.stringify(updatedFav))
  localStorage.setItem("favMapIds", JSON.stringify(Array.from(updatedFavMap.entries())))
}
  
  return (  
    <div
      className="relative rounded-xl overflow-hidden w-[300px] h-[300px] border border-[#333] hover:border-[#00f0ff] transition-all duration-300 hover:scale-105 shadow-md"
      onMouseEnter={() => setShowFav(true)}
      onMouseLeave={() => setShowFav(false)}
    >

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
      />

      <div
        className={`absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 transition-all duration-300 ease-in-out ${showFav ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
      >
        <Link to={`/movieDetails/${movie.id}`}>
          <h1 className="text-lg font-bold mb-1 hover:underline cursor-pointer select-none text-white">
            {movie.title}
          </h1>
        </Link>

        <div className="flex items-center justify-between">
          <div className="text-sm text-[#ccc]">
            <strong className="text-white">Release:</strong> {movie.release_date}
          </div>

          <button
            className="ml-2 p-1 hover:scale-110 transition-transform"
            onClick={() => removeFav(movie.id)}
          >
            <CircleX size={25} color="#ffffff" />
          </button>
        </div>
      </div>
    </div>
  );
}




export default MovieCard