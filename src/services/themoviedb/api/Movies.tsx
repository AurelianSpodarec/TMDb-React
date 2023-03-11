// ============================================================
// API Docs: https://developers.themoviedb.org/3/movies
// ============================================================
import FetchTheMovieDB from "../fetch/FetchTheMovieDB"

interface MovieRequestParams {
    movie_id: number;
}
  

export async function getMovieDetails({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}`, "GET")
}

export async function getMovieAccountStates({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/account_states`, "GET")
}

export async function getMovieAlternativeTitles({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/alternative_titles`, "GET")
}

export async function getMovieChanges({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/changes`, "GET")
}

export async function getMovieCredits({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/credits`, "GET")
}

export async function getMovieExternalIDs({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/external_ids`, "GET")
}

export async function getMovieImages({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/images`, "GET")
}

export async function getMovieKeywords({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/keywords`, "GET")
}

export async function getMovieLists({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/lists`, "GET")
}

export async function getMovieRecommendations({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/recommendations`, "GET")
}

export async function getMovieReleaseDates({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/release_dates`, "GET")
}

export async function getMovieReviews({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/reviews`, "GET")
}

export async function getMovieSimilarMovies({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/similar`, "GET")
}

export async function getMovieTranslations({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/translations`, "GET")
}

export async function getMovieVideos({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/videos`, "GET")
}

export async function getMovieWatchProviders({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/watch/providers`, "GET")
}

export async function postMovieRate({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/rating`, "POST")
}

export async function deleteMovieRate({ movie_id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${movie_id}/rating`, "DELETE")
}

export async function getMovieLatest(): Promise<any> {
    return FetchTheMovieDB(`movie/latest`, "GET")
}

export async function getMovieNowPlaying(): Promise<any> {
    return FetchTheMovieDB(`movie/now_playing`, "GET")
}

export async function getMovieListPopular(page = 1): Promise<any>  {
    const params:any = {
        page
    }
    const qa = new URLSearchParams(params);
    
    const url = qa.toString() === "" ? "" : `?${qa}`;
    return FetchTheMovieDB(`movie/popular${url}`, "GET")
}

export async function getMovieTopRated(): Promise<any> {
    return FetchTheMovieDB(`movie/top_rated`, "GET")
}

export async function getMovieUpcoming(): Promise<any> {
    return FetchTheMovieDB(`movie/upcoming`, "GET")
}