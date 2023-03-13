import GenreItem from "./GenreItem";

function GenreList({data}:any) {
    return (
        <ul className="flex space-x-2">
        {data && data.map((genre:any) => {
            return <GenreItem key={genre.id} item={genre} />
        })}
        </ul>
    )
}

export default GenreList;