import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import Header from './Header';

export default function Home({fav, setFav, favMapIDs, setFavMapIds}) {
    const API_KEY = "57eadc399864ae7bab8f6e17ec62c0b8"
    const defaultMovieNames = [
        "John wick", "spider-man", "The Dark Knight", "Joker", "Fight Club",
        "Pulp Fiction", "The Matrix", "Avengers", "Iron Man", "The Shawshank Redemption",
        "Forrest Gump", "The Godfather", "The Godfather Part II", "The Batman", "Tenet",
        "Parasite", "Gladiator", "No Country for Old Men", "La La Land",
        "Whiplash", "The Social Network", "The Wolf of Wall Street", "The Prestige",
        "The Imitation Game", "Doctor Strange", "Guardians of the Galaxy",
        "Black Panther", "Spider-Man: Into the Spider-Verse", "Dune"
    ];
    const [genreMap, setGenreMap] = useState({});

    const fetchGenreMap = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
            const data = await res.json();
            const map = {};
            data.genres.forEach((genre) => {
                map[genre.id] = genre.name;
            });
            setGenreMap(map);
        } catch (err) {
            console.error("Failed to fetch genres", err);
        }
    };

    const [searchMovie, setSearchMovie] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetchAllDefaultMovies = async () => {
        setLoading(true);
        setError(false);

        try {
            const promises = defaultMovieNames.map(name =>
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`)
                    .then(res => res.json())
            );

            const results = await Promise.all(promises);
            const validResults = results
                .map(data => Array.isArray(data.results) && data.results.length > 0 ? data.results[0] : null)
                .filter(movie => movie && movie.poster_path !== null);

            setMovies(validResults);
        } catch (err) {
            setError(true);
        }

        setLoading(false);
    };
    useEffect(() => {
        fetchAllDefaultMovies();
        fetchGenreMap();
    }, []);

    useEffect(() => {
        setMovies([]);
        if (searchMovie.trim() === "") {
            setLoading(false);
            setError(false);
            fetchAllDefaultMovies()
            return;
        }

        setLoading(true);
        setError(false);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchMovie}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results);
                setError(false);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [searchMovie]);

    return (
        <div className="bg-[#121212] scroll-smooth min-h-screen w-full flex flex-col items-center overflow-x-hidden px-4">
            <Header />
            <input
                type="text"
                placeholder="Search a movie"
                className="mt-6 w-full max-w-xl p-3 rounded text-[#f2f2f2] text-xl mb-16 bg-[#1e1e1e] placeholder:text-[#888] border border-[#333] outline-none focus:ring-2 focus:ring-[#00f0ff]"
                onChange={(e) => setSearchMovie(e.target.value)}
            />
            {loading &&
                <div className='flex justify-center items-center'>
                    <div className='w-12 h-12 border-4 border-t-[#00f0ff] border-[#333] rounded-full animate-spin'></div>
                </div>
            }
            {error && <div className="text-[#00f0ff] text-xl">No movies found 🔍</div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 gap-x-16 w-full max-w-6xl pb-10">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} genreMap={genreMap} fav={fav} setFav={setFav} favMapIDs={favMapIDs} setFavMapIds={setFavMapIds} />
                ))}
            </div>
        </div>
    );
}
