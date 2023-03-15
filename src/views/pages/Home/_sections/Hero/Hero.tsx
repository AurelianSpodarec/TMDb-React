import Button from "@/views/atoms/Button/Button";
import { useEffect, useState } from "react";

import { getMovieNowPlaying } from "@/services/apis/themoviedb/requests/Movies";

import { IMovie } from "types/IMovie";
import RecommendedList from "./_components/RecommendedList";

function Hero() {
    const [previewMovie, setPreviewMovie] = useState<IMovie | null>(null);
    const [movies, setMovies] = useState<Request | null>(null);

    async function fetchMovie() {
        const res = await getMovieNowPlaying();
        setMovies({ ...res, results: res.results.slice(0, 4) });
        setPreviewMovie(res.results[0] ?? null);
    }

    function setPreview(id: number) {
        const mov = movies?.results.find((item) => item.id === id);
        setPreviewMovie(mov ?? null);
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <section className="relative shadow-inner overflow-hidden h-[800px] mx-auto">
        {/* <div className=""> */}

            <div className="flex flex-row my-0 h-full w-full px-[5vw] mx-auto relative">

                <div className="flex justify-center flex-col hero text-white z-10 w-[35%]">
                    <div className="mb-[200px]">
                        <h1 className="text-5xl font-bold">{previewMovie?.title}</h1>
                        <div>
                            <Button label="Play Now" />
                        </div>
                        <span>{previewMovie?.overview}</span>
                    </div>
                </div>

                <div className="w-[65%]">
                    <img className="absolute h-full w-full top-0 right-0 bottom-0 left-40 object-cover" src={`https://image.tmdb.org/t/p/original/${previewMovie?.backdrop_path}`} alt="" />
                </div>
                
            </div>

            <div id="recommended" className="absolute bottom-0 z-10">
            {movies && <RecommendedList data={movies.results} activeMovie={previewMovie} onClick={setPreview} />}
            </div>
        {/* </div> */}
        </section>
    )
}

export default Hero;