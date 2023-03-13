// ============================================================
// API Docs: https://developers.themoviedb.org/3/trending/get-trending
// ============================================================
import FetchTheMovieDB from "../fetch/FetchTheMovieDB"

export async function getTrending(
    { mediaType = "all", timeWindow ="day" }:
    { mediaType?: keyof MediaType, timeWindow?: keyof TimeWindow}
): Promise<any> {
   
    const mediaTypes: MediaType ={
        all: "all",
        movie: "movie",
        tv: "tv",
        person: "person"
    }

    const timeWindows: TimeWindow = {
        day: "day",
        week: "week"
    }

    return FetchTheMovieDB(`trending/popular?${mediaTypes[mediaType]}/${timeWindows[timeWindow]}&`, "GET")
}

interface MediaType {
    all: string;
    movie: string;
    tv: string;
    person: string;
}

interface TimeWindow {
    day: string;
    week: string;
}