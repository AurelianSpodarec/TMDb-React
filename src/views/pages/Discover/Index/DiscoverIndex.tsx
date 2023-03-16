import { getDiscoverMovie } from "services/apis/themoviedb/requests/Discovery";
import Container from "@/views/atoms/Container";
import Section from "@/views/atoms/Section";
import Pagination from "@/views/molecules/Pagination/Pagination";
import PosterList from "@/views/molecules/Poster/PosterList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { configAdvertisement } from "@/config/advertisement";

const optionSortBy = [
    {"value": "popularity.desc", "label": "Popularity Descending"},
    {"value": "popularity.asc", "label": "Popularity Ascending"},
    {"value": "release_date.desc", "label": "Release Date Descending"},
    {"value": "release_date.asc", "label": "Release Date Ascending"},
    {"value": "revenue.desc", "label": "Revenue Descending"},
    {"value": "revenue.asc", "label": "Revenue Ascending"},
    {"value": "primary_release_date.desc", "label": "Primary Release Date Descending"},
    {"value": "primary_release_date.asc", "label": "Primary Release Date Ascending"},
    {"value": "original_title.desc", "label": "Original Title Descending"},
    {"value": "original_title.asc", "label": "Original Title Ascending"},
    {"value": "vote_average.desc", "label": "Vote Average Descending"},
    {"value": "vote_average.asc", "label": "Vote Average Ascending"},
    {"value": "vote_count.desc", "label": "Vote Count Descending"},
    {"value": "vote_count.asc", "label": "Vote Count Ascending"}
];

const optionsPrimaryReleaseYear = [

]


const ratingOptions = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]

// vote_count.gte
// integer
// Filter and only include movies that have a vote count that is greater or equal to the specified value.

// minimum: 0
// optional
// vote_count.lte
// integer
// Filter and only include movies that have a vote count that is less than or equal to the specified value.

// minimum: 1
// optional
// vote_average.gte
// number
// Filter and only include movies that have a rating that is greater or equal to the specified value.

// minimum: 0
// optional
// vote_average.lte
// number
// Filter and only include movies that have a rating that is less than or equal to the specified value.

// minimum: 0

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



    async function fetchData() {
        const res = await getDiscoverMovie(queryParams);
        const { results } = res;
      
        const randomIndex = Math.floor(Math.random() * results.length);
        const randomADIndex = Math.floor(Math.random() * configAdvertisement.length);
        const newResults = [
          ...results.slice(0, randomIndex),
          configAdvertisement[randomADIndex],
          ...results.slice(randomIndex)
        ];
      
        setMovies({ ...res, results: newResults });
    }

  
    useEffect(() => {
        fetchData()
    }, [queryParams, searchParams])
    
    useEffect(() => {
    }, [])
   

    function handleSortByChange(sortBy: string) {
        setSearchParams({
            ...queryParams,
            sort_by: sortBy,
        });
    }

    return (
        <div className="bg-[#071520] pt-40">
            Discover Index  
            <div>


                <SortByDropdown value={queryParams.sort_by} onChange={handleSortByChange} />

            </div>

            <Section>
            <Container>

                <Pagination page={movies.page} total={movies.total_pages} />
                <PosterList data={movies.results} />


            </Container>
            </Section>
        </div>
    )
}

export default DiscoverIndex;