import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
;
import { getMovieDetails } from "@/services/themoviedb/api/Movies";
import { IMovie } from "@/types/IMovie";

function MovieShow() {
    const { id } = useParams(); 

    const [movie, setMovie] = useState<IMovie>({});

    async function fetchMovie() {
        const res = await getMovieDetails({ id: Number(id) });
        setMovie(res)
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <div>
            Movie Show
            <img
                src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                alt={`${movie?.title} poster`}
            />
            <h1>{movie.title}</h1>
        </div>
    )
}

export default MovieShow;