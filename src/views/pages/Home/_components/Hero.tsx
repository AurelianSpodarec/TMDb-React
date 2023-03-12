import { useEffect, useState } from "react";

import { getMovieNowPlaying } from "@/services/themoviedb/api/Movies";
import { IMovie } from "@/types/IMovie";


function RecommendedMovieItem({item, onClick, isActive}:any) {
    return (
        <div key={item.id} onClick={() => onClick(item.id)} className={`border transition ease-in-out duration-75 hover:scale-105 rounded-lg cursor-pointer ${isActive.id === item.id ? "border-gray-100 scale-105 z-10" : "border-transparent "} `}>
            <h3 className="sr-only">{item.title}</h3>
            <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} />
        </div>
    )
}

function RecommendedMovies({data, onClick, activeMovie}:any) {
    // console.log(activeMovie)
    return (
        <div className="grid grid-cols-4 gap-4 p-8">
         {data && data.map((item: any) => (
            <RecommendedMovieItem item={item} onClick={onClick} isActive={activeMovie}/>
        ))}
        </div>
    )
}



function Hero() {
    const [previewMovie, setPreviewMovie] = useState<IMovie | null>({});
    const [movies, setMovies] = useState<Request | null>(null);

    function setPreview(id:any) {
        console.log(id)
        console.log(movies)
        let mov = movies && movies?.results.find(item => item.id === id)
        setPreviewMovie(mov)
    }


    async function fetchMovie() {
        const res = await getMovieNowPlaying();
        setMovies({...res, results: res.results.slice(0,4)})
        setPreviewMovie(res.results[0])
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <section className="relative shadow-inner overflow-hidden h-[700px] mx-auto">
        {/* <div className=""> */}

            <div className="flex flex-row my-0 h-full w-full px-[5vw] mx-auto relative">

                <div className="flex justify-center flex-col hero text-white z-10 w-[35%]">
                    <div className="mb-[200px]">
                        <h1 className="text-5xl font-bold">{previewMovie?.title}</h1>
                        <span>{previewMovie?.overview}</span>
                    </div>
                </div>

                <div className="w-[65%]">
                    <img className="absolute h-full w-full top-0 right-0 bottom-0 left-40 object-cover" src={`https://image.tmdb.org/t/p/original/${previewMovie?.backdrop_path}`} alt="" />
                </div>
                
            </div>

            <div id="recommended" className="absolute bottom-0 z-10">
                <RecommendedMovies data={movies?.results} activeMovie={previewMovie} onClick={setPreview} />
            </div>
        {/* </div> */}
        </section>
    )
}

export default Hero;