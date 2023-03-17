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
    const [movies, setMovies] = useState({})

    const [queryParams, setQueryParams] = useState({
        "sort_by":  "release_date.desc",
        "primary_release_date.lte": "2023-03-03", // needs to be always before current date so bigger chance to have an image
        "vote_average.gte": 1 // ensures all stuff has at least 1rating, a lot have 0
        // primary_release_year: 2023,
    });


    function handleSortByChange(sortBy: string) {
        setSearchParams({
            ...searchParams,
            // ...queryParams,
            sort_by: sortBy,
        });
    }

    async function fetchData() {
        let res = await getDiscoverMovie(queryParams);
        res = injectAdvertisement(res, res.results)
        setMovies(res);
    }

    useEffect(() => {
        fetchData()
    }, [queryParams, searchParams])
    
    return (
        <div className="pt-40">

            {/* START: SORT MENU */}
            <Section>
            <Container>

                <SortByDropdown value={queryParams.sort_by} onChange={handleSortByChange} />

            </Container>
            </Section>
            {/* END: SORT MENU */}

            <Section>
            <Container>

                <PosterList data={movies.results} postType="movies" />

                <Pagination data={movies} />
                

            </Container>
            </Section>
        </div>
    )
}

export default DiscoverIndex;