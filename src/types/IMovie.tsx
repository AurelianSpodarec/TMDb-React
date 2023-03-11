import { IProductionCompany } from "./ICompany";
import { IGenre } from "./IGenres";


export interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface ISpokenLanguage {
    english_name? :string;
    iso_639_1: string;
    name: string;
}

export type IBelongsToCollection = {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
};

type IMovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';


export type IMovie = {
    adult?: boolean;
    backdrop_path?: string | null;
    belongs_to_collection?: IBelongsToCollection | null;
    budget?: number;
    genres?: IGenre;
    id?: number;
    imdb_id?: string | null;
    original_language?: string;
    original_title?: string;
    overview?: string | null;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: IProductionCompany[];
    production_countries?: IProductionCountry[];
    release_date?: string;
    revenue?: number;
    runtime?: number | null;
    spoken_languages?: ISpokenLanguage[];
    status?: IMovieStatus;
    tagline?: string | null;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export interface IMovieAccountStates {
    id: number;
    favorite: boolean;
    watchlist: boolean;
    rated?: {
        value: number;
    };
}
  


export interface IMovieAlternativeTitles {
    id: number;
    titles: IMovieAlternativeTitles[];
}

export interface IMoveAlternativeTitle {
    iso_3166_1: string;
    title: string;
    type: string;
}


export interface IMovieChange {
    changes?: {
    key?: string;
        items?: {
            id?: string;
            action?: string;
            time?: string;
            iso_639_1?: string;
            value?: string;
            original_value?: string;
        }[];
    }[];
}

export interface ISocialIds {
    imdb_id?: string | null;
    facebook_id?: string | null;
    instagram_id?: string | null;
    twitter_id?: string | null;
    id?: number;
}