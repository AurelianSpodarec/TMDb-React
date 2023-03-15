import { useEffect, useState } from "react";
import { getPersonLatest, getPersonListPopular } from "@/services/themoviedb/api/People";

import Container from "@/views/atoms/Container";
import Section from "@/views/atoms/Section";

import PersonList from "@/views/molecules/Person/PersonList";
import TitleHeader from "@/views/molecules/TitleHeader";


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