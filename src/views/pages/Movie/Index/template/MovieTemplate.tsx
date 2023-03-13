import React, { useState, useEffect } from 'react';
import { getMovieNowPlaying } from "@/services/themoviedb/api/Movies";
import MovieList from './MovieList';

function MovieListTemplate() {
    // Pagination? Yes/no
    // number to display posts

    const [movies, setMovies] = useState<Request | null>(null);

    async function fetchMovie() {
        const res = await getMovieNowPlaying();
        setMovies(res)
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <MovieList items={movies?.results} />
    )
}

export default MovieListTemplate;

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