import { useEffect, useState } from "react";
import { getMovieListPopular } from "services/themoviedb/api/Movies";

function Home() {

    async function fetch() {
        const res = await getMovieListPopular()
        console.log(res)
    }
    
    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            <h1 className="text-5xl font-bold flex text-red-500">Home Page</h1>


            <section>
                <h2>Top Rated</h2>
                <ul>
                    <li>Movie1</li>
                </ul>
            </section>
        </div>
    )
}

export default Home;