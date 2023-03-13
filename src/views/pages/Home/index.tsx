import { useEffect, useState } from "react";
import Hero from "./_sections/Hero/Hero";

import { getTrending } from "@/services/themoviedb/api/Trending";

function PosterCard({ item }:any) {
    console.log(item)
    return (
        <div className="overflow-hidden rounded-2xl">
            <div className="h-[300px]">
                <img className="h-full w-full object-cover" src={` https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            </div>
            <div>
                <h3 className="text-white">{item.title ? item.title : item.name}</h3>
                <span className="text-white">{item.media_type}</span>
                <span className="text-white">{item.release_date}</span>
            </div>
        </div>
    )
}

function RenderPosters({ data }:any) {
    console.log(data)
    return (
        <div className="grid grid-cols-7 gap-12">
            {
                data && data.map((item:any) => {
                    return <PosterCard key={item.id} item={item} />
                })
            }
        </div>
    )
}

function Home() {
    const [trending, setTrending] = useState({})

    async function fetch() {
        const res = await getTrending();
        setTrending({...res, results: res.results.slice(0,7)})
        console.log("trending", res)
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className="bg-[#071520]">
            <Hero />

            <div className="banner">
                <h2 className="font-bold text-3xl text-white">🔥 Trending This Week</h2>
                <div>
                    <RenderPosters data={trending.results} />
                </div>
            </div>
        </div>
    )
}

export default Home;