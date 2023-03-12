import MovieItem from "./MovieItem";


function MovieList({ items }: any) {

    const isLoading = items && items.length === 0

    function renderContent() {
        if (isLoading) {
            return [...Array(3)].map((_, index) => (
                <MovieItem key={index} isLoading={true} />
            ));
        } else if (items && items.length) {
            return items.map((item: any) => (
                <MovieItem key={item.id} movie={item} />
            ));
        } else {
            return "Not found";
        }
    }
    
    return (
        <div className="space-y-4 relative">
            {renderContent()}
        </div>
    )
}

export default MovieList;