import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';
import Feedback from './Feedback';
import Favorites from './Favorites';
import MovieDetails from './MovieDetails';
import MoviePlayer from "./MoviePlayer";


export default function App() {
  const [fav, setFav] = useState(() => {
    const stored = localStorage.getItem("FavMovies")
    return stored ? JSON.parse(stored) : []
  })
  const [favMapIDs, setFavMapIds] = useState(() => {
    const getFavIds = localStorage.getItem("favMapIds")
    try {
      return getFavIds ? new Map(JSON.parse(getFavIds)) : new Map();
    } catch (err) {
      console.error("Failed to parse favMapIds from localStorage", err);
      return new Map();
    }
  })

  useEffect(() => {
    localStorage.setItem("favMapIds", JSON.stringify(Array.from(favMapIDs.entries())))
  }, [favMapIDs])
  return (
    <Routes>
      <Route path="/" element={<Home fav={fav} setFav={setFav} favMapIDs={favMapIDs} setFavMapIds={setFavMapIds} />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorites" element={<Favorites fav={fav} setFav={setFav} favMapIDs={favMapIDs} setFavMapIds={setFavMapIds} />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/movieDetails/:movieID" element={<MovieDetails />} />
      <Route path="movieplayer/:movieName" element={<MoviePlayer />} />

    </Routes>
  );
}
