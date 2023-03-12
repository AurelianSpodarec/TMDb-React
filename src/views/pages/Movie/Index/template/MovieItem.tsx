import { IMovie } from "types/IMovie";
import { Link } from "react-router-dom";
 

function MovieItem({ movie, isLoading }:MovieItemProps) {
 
    if(isLoading) {
        return (
            <div className="border border-[#f2efe9] shadow rounded-md p-5 w-full mx-auto">
            <div className="animate-pulse flex md:space-x-5 relative items-center justify-between">


                <header className="flex items-center space-x-5">
                <div className="rounded-full bg-gray-900/60 h-16 w-16"></div>

                <div className="flex-1 space-y-6 py-1">
                    <div>
                        <div className="h-5 mb-3 w-48 bg-gray-900/60 rounded"></div>
                        <div className="h-3 w-64 bg-gray-900/60 rounded"></div>
                    </div>
                </div>
                </header>

                <div className="absolute right-0 justify-stretch mx-3 md:mx-6 pb-6 md:py-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
                    <div className="h-10 w-36 bg-gray-900/60 rounded"></div>
                    <div className="h-10 w-36 bg-gray-900/60 rounded"></div>
                </div>

            </div>
            </div>
        )
    }

    return (
        <article className="">
            <Link to={`/movies/${movie?.id}`} className={`md:space-x-5`}>
                {/* <h2>{movie?.title}</h2> */}
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                    alt={`${movie?.title} poster`}
                    className="w-full h-full object-cover"
                />
            </Link>
        </article>
    )
}

export default MovieItem;

interface MovieItemProps {
    movie?: IMovie;
    isLoading?: boolean;
}

