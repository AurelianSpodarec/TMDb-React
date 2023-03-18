import { getMovieListPopular, getMovieNowPlaying } from "@/services/apis/themoviedb/requests/Movies";
import Container from "@/views/atoms/Container";
import Section from "@/views/atoms/Section";
import Pagination from "@/views/molecules/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "./template/MovieList";
import MovieListTemplate from "./template/MovieTemplate";

function MovieIndex() {
    let [searchParams, setSearchParams] = useSearchParams();

    const [movies, setMovies] = useState<Request | null>(null);
    const [isLoading, setIsLoading] = useState(true)

    async function fetchMovie() {
        const res = await getMovieListPopular();
        setMovies(res)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchMovie()
        setIsLoading(true)
    }, [searchParams])

    return (
        <div>

            <Section>
            <Container>

                <MovieList items={movies?.results} isLoading={isLoading} />
            
            </Container>
            </Section>


            <Section>
            <Container>

                <Pagination data={movies} />
                
            </Container>
            </Section>
        </div>
    )
}

export default MovieIndex;