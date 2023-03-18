import MovieItem from "./MovieItem";


function MovieList({ items, isLoading }: any) {

    function renderContent() {
        if (isLoading) {
            return [...Array(21)].map((_, index) => (
                <MovieItem key={index} isLoading={isLoading} />
            ));
        } else if (items && items.length) {
            return items && items.map((item: any) => (
                <MovieItem key={item.id} movie={item} />
            ));
        } else {
            return "Not found";
        }
    }
    
    return (
        <div className="space-y-4 grid grid-cols-4 gap-4 relative">
            {renderContent()}
        </div>
    )
}

export default MovieList;