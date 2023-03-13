// ============================================================
// API Docs: https://developers.themoviedb.org/3/search/search-companies
// ============================================================
import FetchTheMovieDB from "../fetch/FetchTheMovieDB"

export async function searchCompanies(page = 1, query=""): Promise<any>  {
    const params:any = {
        page,
        query
    }

    const qa = new URLSearchParams(params);
    const url = qa.toString() === "" ? "" : `?${qa}`;
    return FetchTheMovieDB(`search/company${url}&`, "GET")
}

export async function searchCollections(page = 1, query=""): Promise<any>  {
    const params:any = {
        page,
        query
    }

    const qa = new URLSearchParams(params);
    const url = qa.toString() === "" ? "" : `?${qa}`;
    return FetchTheMovieDB(`search/collection${url}&`, "GET")
}

export async function searchKyewords(page = 1, query=""): Promise<any>  {
    const params:any = {
        page,
        query
    }

    const qa = new URLSearchParams(params);
    const url = qa.toString() === "" ? "" : `?${qa}`;
    return FetchTheMovieDB(`search/keyword${url}&`, "GET")
}

export async function searchMovies(page = 1, query=""): Promise<any>  {
    const params:any = {
        page,
        query
    }

    const qa = new URLSearchParams(params);
    const url = qa.toString() === "" ? "" : `?${qa}`;
    return FetchTheMovieDB(`search/movie${url}&`, "GET")
}

export async function searchMulti(page = 1, query="", adult = false): Promise<any>  {
    const params:any = {
        page,
        query,
        include_adult: adult
    }

    const qa = new URLSearchParams(params);
    const url = qa.toString() === "" ? "" : `?${qa}`;
    return FetchTheMovieDB(`search/multi${url}&`, "GET")
}

export async function searchPeople(page = 1, query="", adult = false): Promise<any>  {
    const params:any = {
        page,
        query,
        include_adult: adult
    }

    const qa = new URLSearchParams(params);
    const url = qa.toString() === "" ? "" : `?${qa}`;
    return FetchTheMovieDB(`search/person${url}&`, "GET")
}

export async function searchTV(page = 1, query="", adult = false, firstAirDateYear=""): Promise<any>  {
    const params:any = {
        page,
        query,
        include_adult: adult,
        first_air_date_year: firstAirDateYear
    }

    const qa = new URLSearchParams(params);
    const url = qa.toString() === "" ? "" : `?${qa}`;
    return FetchTheMovieDB(`search/tv${url}&`, "GET")
}