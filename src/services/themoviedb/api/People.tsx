// ============================================================
// API Docs: https://developers.themoviedb.org/3/people/get-person-details
// ============================================================
import FetchTheMovieDB from "../fetch/FetchTheMovieDB"
  


interface MovieRequestParams {
    id: number;
}
  
export async function getPersonDetails({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}?`, "GET")
}





export async function getPersonAccountStates({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/account_states`, "GET")
}

export async function getPersonAlternativeTitles({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/alternative_titles`, "GET")
}

export async function getPersonChanges({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/changes`, "GET")
}

export async function getPersonCredits({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/credits`, "GET")
}

export async function getPersonExternalIDs({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/external_ids`, "GET")
}

export async function getPersonImages({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/images`, "GET")
}

export async function getPersonKeywords({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/keywords`, "GET")
}

export async function getPersonLists({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/lists`, "GET")
}

export async function getPersonRecommendations({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/recommendations`, "GET")
}

export async function getPersonReleaseDates({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/release_dates`, "GET")
}

export async function getPersonReviews({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/reviews`, "GET")
}

export async function getPersonSimilarMovies({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/similar`, "GET")
}

export async function getPersonTranslations({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/translations`, "GET")
}

export async function getPersonVideos({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/videos`, "GET")
}

export async function getPersonWatchProviders({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/watch/providers`, "GET")
}

export async function postMovieRate({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/rating`, "POST")
}

export async function deleteMovieRate({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`person/${id}/rating`, "DELETE")
}

export async function getPersonLatest(): Promise<any> {
    return FetchTheMovieDB(`person/latest?`, "GET")
}

export async function getPersonNowPlaying(): Promise<any> {
    return FetchTheMovieDB(`person/now_playing?`, "GET")
}

export async function getPersonListPopular(page = 1): Promise<any>  {
    const params:any = {
        page
    }

    const qa = new URLSearchParams(params);
    const url = qa.toString() === "&" ? "" : `?${qa}&`;
    return FetchTheMovieDB(`person/popular${url}`, "GET")
}

export async function getPersonTopRated(): Promise<any> {
    return FetchTheMovieDB(`person/top_rated?`, "GET")
}

export async function getPersonUpcoming(): Promise<any> {
    return FetchTheMovieDB(`person/upcoming`, "GET")
}