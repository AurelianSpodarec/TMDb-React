import MovieListTemplate from "./template/MovieTemplate";

function MovieIndex() {
   

    return (
        <div>
            Movie Index
            <MovieListTemplate />
            {/* <div>
                <div>Page:{movies?.page}</div>
                <div>Total Page:{movies?.total_pages}</div>
            </div> */}
        </div>
    )
}

export default MovieIndex;