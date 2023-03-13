import { useEffect, useState } from "react";
import Hero from "./_sections/Hero/Hero";

import { getTrending } from "@/services/themoviedb/api/Trending";

import PosterCard from "molecules/PosterCard";
import TitleHeader from "molecules/TitleHeader";


// TODO: There will be a lot of these functions for different types, perhaps a general RenderPosterList will be good or a folder to store different variations so they can be reused
function RenderPosters({ data }:any) {
    return (
        <div className="grid grid-cols-7 gap-12">
            {data && data.map((item:any) => <PosterCard key={item.id} item={item} />)}
        </div>
    )
}

function Home() {
    const [trending, setTrending] = useState({})

    async function fetch() {
        const res = await getTrending();
        setTrending({...res, results: res.results.slice(0,7)})
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className="bg-[#071520]">
            <Hero />

            <div className="banner">
               
                <TitleHeader 
                    title="🔥 Trending This Week"
                    viewAllLink="movies" 
                />

                <div>
                    <RenderPosters data={trending.results} />
                </div>
            </div>
        </div>
    )
}

export default Home;