import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
;
import { getMovieDetails } from "@/services/themoviedb/api/Movies";
import { IMovie } from "@/types/IMovie";

function IconPlay() {
    return (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
      </svg>
    );
  }

function RenderGenreItem({item}:any) {
    return (
        <div className="bg-gray-300/30 text-white py-1 px-1.5 text-sm rounded-md border">
            {item.name}
        </div>
    )
}

function RenderGenres({data}:any) {
    return (
        <ul className="flex space-x-2">
        {data && data.map((genre:any) => {
            return <RenderGenreItem key={genre.id} item={genre} />
        })}
        </ul>
    )
}



function Box({title, value, type}:any) {
    return (
        <div className={`relative flex justify-center items-center rounded-3xl h-[150px] ${type === 'play' ? "bg-red-500" : "bg-gray-700/70"} `}>

            {type === "play" ? 
                <div className="w-12 fill-white">
                    <IconPlay /> 
                </div>
                :
                <>
                    {title && <span className="absolute left-0 inline-block -rotate-90 text-white">{title}</span>}
                    {value && <span className="text-4xl text-white font-bold">{value}</span>}
                </>
            }

        </div>
    )
}

function Info() {
    return (
        <div className=" bottom-0 left-0 right-0">
        <div className="grid grid-cols-5 gap-4">
            <Box type="play" />
            <Box title="Rating" value="PG" />
            <Box title="Release" value="April 7, 2023" />
            <Box title="Budget" value="$130M" />
            <Box title="Length" value="126min" />
        </div>
        </div>
    )
}


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
                                <RenderGenres data={movie?.genres} />
                            </div>
                            <div className="bg-white rounded-lg px-4 py-2">
                                Go
                            </div>
                        </div>

                        <Info />
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