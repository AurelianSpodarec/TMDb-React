// ============================================================
// API Docs: https://developers.themoviedb.org/3/movies
// ============================================================
import FetchTheMovieDB from "../fetch/FetchTheMovieDB"

import { 
    IMovie, 
    IMovieAccountStates, 
    IMoveAlternativeTitle, 
    IMovieChange, 
    ISocialIds
} from "types/IMovie";

import { ICredits } from "@/types/ICredits";


interface MovieRequestParams {
    id: number;
}
  
export async function getMovieDetails({ id }:MovieRequestParams): Promise<IMovie> {
    return FetchTheMovieDB(`movie/${id}`, "GET")
}

export async function getMovieAccountStates({ id }:MovieRequestParams): Promise<IMovieAccountStates> {
    return FetchTheMovieDB(`movie/${id}/account_states`, "GET")
}

export async function getMovieAlternativeTitles({ id }:MovieRequestParams): Promise<IMoveAlternativeTitle> {
    return FetchTheMovieDB(`movie/${id}/alternative_titles`, "GET")
}

export async function getMovieChanges({ id }:MovieRequestParams): Promise<IMovieChange> {
    return FetchTheMovieDB(`movie/${id}/changes`, "GET")
}

export async function getMovieCredits({ id }:MovieRequestParams): Promise<ICredits> {
    return FetchTheMovieDB(`movie/${id}/credits`, "GET")
}

export async function getMovieExternalIDs({ id }:MovieRequestParams): Promise<ISocialIds> {
    return FetchTheMovieDB(`movie/${id}/external_ids`, "GET")
}

export async function getMovieImages({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/images`, "GET")
}

export async function getMovieKeywords({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/keywords`, "GET")
}

export async function getMovieLists({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/lists`, "GET")
}

export async function getMovieRecommendations({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/recommendations`, "GET")
}

export async function getMovieReleaseDates({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/release_dates`, "GET")
}

export async function getMovieReviews({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/reviews`, "GET")
}

export async function getMovieSimilarMovies({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/similar`, "GET")
}

export async function getMovieTranslations({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/translations`, "GET")
}

export async function getMovieVideos({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/videos`, "GET")
}

export async function getMovieWatchProviders({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/watch/providers`, "GET")
}

export async function postMovieRate({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/rating`, "POST")
}

export async function deleteMovieRate({ id }:MovieRequestParams): Promise<any> {
    return FetchTheMovieDB(`movie/${id}/rating`, "DELETE")
}

export async function getMovieLatest(): Promise<any> {
    return FetchTheMovieDB(`movie/latest`, "GET")
}

export async function getMovieNowPlaying(): Promise<any> {
    return FetchTheMovieDB(`movie/now_playing`, "GET")
}

export async function getMovieListPopular(page = 1): Promise<IMovie>  {
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