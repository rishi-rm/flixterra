import Header from "./Header"
import { FavMovieCard } from "./MovieCard"
export default function Favorites({ fav, setFav, favMapIDs, setFavMapIds }) {
    return (
        <div className="h-screen w-[screen] flex items-center flex-col">
            <Header />
            { fav.length===0 ? 
            <div className="text-[#454545] font-semibold font-mono text-5xl relative top-40">No favourite movies added!</div>
            :
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 gap-x-16 w-full max-w-6xl pb-10">
                        {
                            fav.map((movie) => (
                                <FavMovieCard key={movie.id} movie={movie} fav={fav} setFav={setFav} favMapIDs={favMapIDs} setFavMapIds={setFavMapIds} />
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}