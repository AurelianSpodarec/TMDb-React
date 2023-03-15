import { appConfig } from "@/config/app";
import { getPersonLatest, getPersonListPopular } from "@/services/themoviedb/api/People";
import Container from "@/views/atoms/Container";
import Section from "@/views/atoms/Section";
import TitleHeader from "@/views/molecules/TitleHeader";
import { useEffect, useState } from "react";

function PersonCard({ item }:any) {
    console.log()
    if(!item) return <></>
    return (
        <div className="text-black">
            <img src={`${appConfig.urlImageTMDB}/w500${item.profile_path}`} />
            {item.name}
            {item.known_for_departament}
            {item.popularity}
        </div>
    )
}

function PersonList({ data }:any) {
    console.log(data)
    return (
        <div className="grid grid-cols-4 gap-8">
            {data && data.map((item:any) => <PersonCard key={item.id} item={item} />)}
        </div>
    )
}

function PeopleIndex() {

    const [topTrending, setTopTrending] = useState({});

    async function fetch() {
        const res = await getPersonListPopular()
        setTopTrending(res)
    }

    useEffect(() => {
        fetch()
    }, [])
   
    return (
        <div>
            
            <Section>
            <Container>

                <TitleHeader title="Top Trending Celebrities" />

                <div>
                    <PersonList data={topTrending?.results} />
                </div>

            </Container>
            </Section>

            <Section>
            <Container>

                <TitleHeader title="Latest Celebrities" />

                <div>
                    {/* <PersonCard /> */}
                </div>

            </Container>
            </Section>

        </div>
    )
}

export default PeopleIndex;