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
            <h1>{movie.title}</h1>
        </div>
    )
}

export default MovieShow;