import { useEffect, useState } from "react";

import { getMovieNowPlaying } from "@/services/themoviedb/api/Movies";
import RenderList from "./template/RenderList";

interface Request {
    dates: {
      maximum: string,
      minimum: string,
    },
    page: number,
    results: {
      adult: boolean,
      backdrop_path: string,
      genre_ids: number[],
      id: number,
      original_language: string,
    }[],
    total_pages: number,
    total_results: number,
};

function MovieIndex() {
    const [movies, setMovies] = useState<Request | null>(null);

    async function fetchMovie() {
        const res = await getMovieNowPlaying();
        setMovies(res)
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <div>
            Movie Index
            <RenderList data={movies?.results} />
            <div>
                <div>Page:{movies?.page}</div>
                <div>Total Page:{movies?.total_pages}</div>
            </div>
        </div>
    )
}

export default MovieIndex;