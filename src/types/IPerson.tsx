export interface PersonDetails {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string | null;
    gender: number;
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    known_for_department: string;
    name: string;
    place_of_birth: string | null;
    popularity: number;
    profile_path: string | null;
}

export interface IPersonCredits {
    cast: CastMovieCredits[];
    crew: Crew[];
    id: number;
}

export interface IPersonTVCredits {
    cast: CastTVCredits[];
    crew: any[];
    id: number;
}
 


export interface CastMovieCredits {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface CastTVCredits {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
    character: string;
    credit_id: string;
    episode_count: number;
}


export interface Crew {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credit_id: string;
    department: string;
    job: string;
}




declare module namespace {

    export interface KnownFor {
        backdrop_path: string;
        first_air_date: string;
        genre_ids: number[];
        id: number;
        media_type: string;
        name: string;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        poster_path: string;
        vote_average: number;
        vote_count: number;
        adult?: boolean;
        original_title: string;
        release_date: string;
        title: string;
        video?: boolean;
    }

    export interface Result {
        adult: boolean;
        gender: number;
        id: number;
        known_for: KnownFor[];
        known_for_department: string;
        name: string;
        popularity: number;
        profile_path: string;
    }

    export interface IResultsPersonPopular {
        page: number;
        results: Result[];
        total_pages: number;
        total_results: number;
    }

}

