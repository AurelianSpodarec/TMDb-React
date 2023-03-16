// ============================================================
// API Docs: https://developers.themoviedb.org/3/discover/movie-discover
// ============================================================
import FetchTheMovieDB from "../fetch/FetchTheMovieDB"

export async function getDiscoverMovie(queryParams: DiscoverMovieQueryParams): Promise<any>  {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pageValue = urlParams.get('page');

    const params:any = {
        ...queryParams, 
        page: pageValue || 1
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