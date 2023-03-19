import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { getDiscoverMovie } from "services/apis/themoviedb/requests/Discovery";
import { injectAdvertisement } from "utils/common";

import Container from "atoms/Container";
import Section from "atoms/Section";

import Pagination from "molecules/Pagination/Pagination";
import PosterList from "molecules/Poster/PosterList";
import FilterSortBy from "molecules/filtering/FilterSortBy";
import FilterRating from "molecules/filtering/FilterRating";
import FilterAdultContent from "molecules/filtering/FilterAdultContent";


function DiscoverIndex() {
    const location = useLocation();
    const urlSearchParams = location.search
    const [searchParams, setSearchParams] = useSearchParams(urlSearchParams);
    
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    const rating = searchParams.get('vote_average.gte') || 1
    const sortBy = searchParams.get('sort_by') || "release_date.desc"
    const releaseDate = searchParams.get('primary_release_date.lte') || "2023-03-03"
    
    const existingSearchParams = new URLSearchParams(location.search);
    
    function updateSearchParams() {
        setSearchParams(existingSearchParams);
    }
    
    function handleSelectVote(filter:any) {
        existingSearchParams.set("vote_average.gte", filter.target.value);
        updateSearchParams()
    }

    function handleSortByChange(sortBy:any) {
        existingSearchParams.set("sort_by", sortBy.target.value);
        updateSearchParams()
    }


    // Other
    // =======================================================

    async function fetchData() {
        let res = await getDiscoverMovie();
        res = injectAdvertisement(res, res.results)
        setIsLoading(false)
        setData(res);
    }

    useEffect(() => {
        fetchData()
        setIsLoading(true)
    }, [searchParams])

    return (
        <div className="pt-40">

            {/* START: SORT MENU */}
            <Section>
            <Container>

                <div>

                    <div>
                        <div>

                        </div>

                        <FilterRating value={rating} onChange={(e:any) => handleSelectVote(e)} />
                        <FilterAdultContent />
                        <FilterSortBy value={sortBy} onChange={(e:any) => handleSortByChange(e)} />
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