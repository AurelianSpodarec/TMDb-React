import { useEffect, useState } from "react";
import Hero from "./_sections/Hero/Hero";

import { getTrending } from "@/services/themoviedb/api/Trending";

import Section from "atoms/Section";
import Container from "atoms/Container";

import TitleHeader from "molecules/TitleHeader";
import PosterList from "molecules/Poster/PosterList";


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

            <Section id="trending" className="banner">
            <Container>

                <TitleHeader 
                    title="🔥 Trending This Week"
                    viewAllLink="movies" 
                />
                <PosterList data={trending.results} />

            </Container>
            </Section>

            <Section id="latest">
            <Container>

                <TitleHeader 
                    title="🎬 Coming up next"
                    viewAllLink="movies" 
                />
                <PosterList data={trending.results} />
            
            </Container>
            </Section>

            <Section id="top-rated">
            <Container>

                <TitleHeader 
                    title="⭐ Top Rated"
                    viewAllLink="movies" 
                />
            
            </Container>
            </Section>
        </div>
    )
}

export default Home;