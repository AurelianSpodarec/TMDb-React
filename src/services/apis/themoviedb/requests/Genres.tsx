// ============================================================
// API Docs: https://developers.themoviedb.org/3/genres/get-movie-list
// ============================================================
import FetchTheMovieDB from "../fetch/FetchTheMovieDB";

export async function getGenreMovies(): Promise<any> {
    return FetchTheMovieDB(`genre/movie/list?`, "GET")
}

export async function getGenreTV(): Promise<any> {
    return FetchTheMovieDB(`genre/tv/list?`, "GET")
}