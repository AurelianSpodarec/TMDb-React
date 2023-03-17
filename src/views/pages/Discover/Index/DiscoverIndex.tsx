import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getDiscoverMovie } from "services/apis/themoviedb/requests/Discovery";
import { optionSortBy } from "config/filters/sortBy";
import { injectAdvertisement } from "utils/common";

import Container from "atoms/Container";
import Section from "atoms/Section";
import Pagination from "molecules/Pagination/Pagination";
import PosterList from "molecules/Poster/PosterList";


const optionsPrimaryReleaseYear = [

]


function SortByRating() {
    return (
        <select>
            <option>

            </option>
        </select>
    )
}


// https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=en-US&sort_by=popularity.desc&include_video=true&page=1&primary_release_year=2022&with_genres=28
function SortByDropdown({ value, onChange }:any) {

    function renderSelect() {
        return (
            <select id="sort_by_select" value={value} onChange={onChange}>
            {optionSortBy && optionSortBy.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
            </select>
        )
    }

    return (
        <div>
            <label htmlFor="sort_by_select">Sort by:</label>
           {renderSelect()}
    </div>
    );
}



function DiscoverIndex() {
    let [searchParams, setSearchParams] = useSearchParams();

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const [filterParams, setSilterParams] = useState({
        "sort_by":  "release_date.desc",
        "primary_release_date.lte": "2023-03-03", // needs to be always before current date so bigger chance to have an image, make the date dynamic
        "vote_average.gte": 1 // ensures all stuff has at least 1rating, a lot have 0
        // primary_release_year: 2023,
    });


    function handleSortByChange(sortBy: string) {
        setSearchParams({
            ...searchParams,
            // ...filterParams,
            sort_by: sortBy,
        });
    }

    async function fetchData() {
        let res = await getDiscoverMovie(filterParams);
        res = injectAdvertisement(res, res.results)
        setIsLoading(false)
        setData(res);
    }

    useEffect(() => {
        fetchData()
        setIsLoading(true)
    }, [filterParams, searchParams])

    return (
        <div className="pt-40">

            {/* START: SORT MENU */}
            <Section>
            <Container>

                <div>

                    <div>
                        {/* User wants to set adult content: Ha, you nasty, I'm not gonna let you do that here - this is a family friendly site! */}

                        <SortByDropdown value={filterParams.sort_by} onChange={handleSortByChange} />
                    </div>

                </div>

            </Container>
            </Section>
            {/* END: SORT MENU */}

            <Section>
            <Container>

                <PosterList data={data.results}  postType="movies" isLoading={isLoading} />

            </Container>
            </Section>


            <Section>
            <Container>

                <Pagination data={data} />
                
            </Container>
            </Section>
        </div>
    )
}

export default DiscoverIndex;