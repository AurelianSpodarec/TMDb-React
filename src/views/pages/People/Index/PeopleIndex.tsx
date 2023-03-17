import { useEffect, useState } from "react";

import { getPersonListPopular } from "@/services/apis/themoviedb/requests/People";

import Container from "@/views/atoms/Container";
import Section from "@/views/atoms/Section";

import PersonList from "@/views/molecules/Person/PersonList";
import TitleHeader from "@/views/molecules/TitleHeader";
import { configAlphabet } from "@/config/alphabet";
import { injectAdvertisement } from "@/utils/common";
import Pagination from "@/views/molecules/Pagination/Pagination";


function AlphabetLetter({ letter }:any) {
    return (
        <div>
            {letter}
        </div>
    )
}

function AlphabetList() {
    return (
        <div className="flex text-white">
            {configAlphabet.map((letter:any) => <AlphabetLetter letter={letter} />)}
        </div>
    )
}

function PeopleIndex() {

    const [topTrending, setTopTrending] = useState({});

    async function fetch() {
        let res = await getPersonListPopular()
        res = injectAdvertisement(res, res.results)
        setTopTrending(res)
    }

    useEffect(() => {
        fetch()
    }, [])
   
    return (
        <div className="bg-[#171e29] pt-28">

            <header>
                <AlphabetList />
            </header>
            
            <div>
                <Section>
                <Container>

                    <TitleHeader title="Celebrities" />

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

                    <Pagination data={topTrending} />
                </Container>
                </Section>
            </div>

        </div>
    )
}

export default PeopleIndex;