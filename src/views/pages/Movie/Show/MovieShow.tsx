import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getMovieDetails } from "@/services/apis/themoviedb/requests/Movies";

import { IMovie } from "types/IMovie";

import GenreList from "./_components/Genre/GenreList";
import InfoList from "./_components/Info/InfoList";


function MovieShow() {
    const { id } = useParams(); 
    const [movie, setMovie] = useState<IMovie>({});

    async function fetchMovie() {
        const res = await getMovieDetails({ id: Number(id) });
        setMovie(res)
        console.log("movie", movie)
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <div className="relative bg-[#05161e]">

            <section className="relative h-[700px] overflow-hidden">
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={`${movie?.title} poster`}
                    className="absolute top-0 right-0 bottom-0 left-0"
                />

                <div className="mx-[5vw] relative h-full">

                    <div className="absolute z-20 left-0 right-0 bottom-10">
                        
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h1 className="text-white text-4xl uppercase font-bold mb-2">{movie.title}</h1>
                                <GenreList data={movie?.genres} />
                            </div>
                            <div className="bg-white rounded-lg px-4 py-2">
                                Go
                            </div>
                        </div>

                        <InfoList />
                    </div>


                </div>
            </section>

            <section className="relative banner text-white">
                <h2>Description</h2>
                <p>{movie.overview}</p>
            </section>
        </div>
    )
}

export default MovieShow;