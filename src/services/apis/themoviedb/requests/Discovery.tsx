// ============================================================
// API Docs: https://developers.themoviedb.org/3/discover/movie-discover
// ============================================================
import FetchTheMovieDB from "../fetch/FetchTheMovieDB"


const filteringParamsPrettyNames = {
    query: "query",
    page: "page",
    include_adult: "adult",
    region: "region",
    year: "year",
    primary_release_year: "release-year",
    append_to_response: "append-to-response",
    first_air_date_year: "first-air-date-year",
    "vote_average.gte": "min-vote-avg",
    "vote_average.lte": "min-vote-avg",
    "vote_count.gte": "min-vote-count",
    "vote_count.lte": "max-vote-count",
    certification_country: "certification-country",
    certification: "certification",
    "certification.lte": "max-certification",
    "certification.gte": "min-certification",
    with_companies: "with-companies",
    with_genres: "with-genres",
    with_keywords: "with-keywords",
    with_people: "with-people",
    with_networks: "with-networks",
    without_genres: "without-genres",
    without_keywords: "without-keywords",
    "year.lte": "max-year",
    "year.gte": "min-year",
    "air_date.lte": "max-air-date",
    "air_date.gte": "min-air-date",
    "first_air_date.lte": "max-first-air-date",
    "first_air_date.gte": "min-first-air-date",
    timezone: "timezone",
    "with_runtime.lte": "max-runtime",
    "with_runtime.gte": "min-runtime",
    with_original_language: "with-original-language",
    with_watch_monetization_types: "with-watch-monetization-types",
    watch_region: "watch-region",
    with_original_title: "with-original-title",
    with_title: "with-title",
    with_crew: "with-crew",
    with_cast: "with-cast",
    with_providers: "with-providers",
    without_providers: "without-providers",
    with_release_type: "with-release-type",
    with_peopledepartment: "with-peopledepartment",
    "with_people.job": "with-people-job",
    sort_by: "sort",
    language: "lang"
}

// TODO: Create some sort of utility to help with the creation of filtering params, setting params, etc... so it can be re-used though the entire app

// TODO: Pretty URL - Its what should show in the URL
const allFilteringOptionsNames = {
    primary_release_date_lte: 'maxReleaseDate', // needs to be always before current date so bigger chance to have an image, make the date dynamic
    vote_average_gte: 'minRating', // ensures all stuff has at least 1rating, a lot have 0 || UI: Let user select one and goes from there
    sort_by: "sort",
    page: "page"
};

// Create get reuqest from the above
// Create set request from the above

const defaultFilterDicoveryMovie = {
    page: 1,
    sort: "release_date.desc",
    "vote_average.gte": 1,
    "primary_release_date.lte": "2023-03-19",
}

export async function getDiscoverMovie(queryParams?: DiscoverMovieQueryParams): Promise<any>  {
    const urlParams = new URLSearchParams(window.location.search);
    
    const pageValue = urlParams.get('page');
    const voteValue = urlParams.get('vote_average.gte');
    const sort = urlParams.get('sort');
    const releaseDate = urlParams.get('primary_release_date.lte');

    const params:any = {
        ...queryParams, 
        page: pageValue || defaultFilterDicoveryMovie.page,
        sort_by: sort || defaultFilterDicoveryMovie.sort,
        "vote_average.gte": voteValue || defaultFilterDicoveryMovie["vote_average.gte"],
        "primary_release_date.lte": releaseDate || defaultFilterDicoveryMovie["primary_release_date.lte"],
    }

    const qa = new URLSearchParams(params);
    const url = qa.toString() === "?" ? "" : `?${qa}&`;
    return FetchTheMovieDB(`discover/movie${url}`, "GET")
}

interface DiscoverMovieQueryParams {
    "language"?: string;
    "region"?: string;
    "sort_by"?: string;
    "certification_country"?: string;
    "certification"?: string;
    "certification.lte"?: string;
    "certification.gte"?: string;
    "include_adult"?: boolean;
    "include_video"?: boolean;
    "page"?: number;
    "primary_release_year"?: number;
    "primary_release_date.gte"?: string;
    "primary_release_date.lte"?: string;
    "release_date.gte"?: string;
    "release_date.lte"?: string;
    "with_release_type"?: number;
    "year"?: number;
    "vote_count.gte"?: number;
    "vote_count.lte"?: number;
    "vote_average.gte"?: number;
    "vote_average.lte"?: number;
    "with_cast"?: string;
    "with_crew"?: string;
    "with_people"?: string;
    "with_companies"?: string;
    "with_genres"?: string;
    "with_keywords"?: string;
    "with_runtime.gte"?: number;
    "with_runtime.lte"?: number;
    "with_original_language"?: string;
    "with_watch_providers"?: string;
    "watch_region"?: string;
    "with_watch_monetization_types"?: string;
    "without_companies"?: string;
    "without_genres"?: string;
    "without_keywords"?: string;
    "without_people"?: string;
    "without_tv_networks"?: string;
}