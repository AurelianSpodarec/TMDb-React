import MediaType from "../atoms/MediaType";

function PosterCard({ item }:any) {
    return (
        <div className="overflow-hidden">
            <div className="h-[270px]">
                <img className="h-full rounded-2xl w-full object-cover" src={` https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            </div>
            <div>
                <h3 className="text-white">{item.title ? item.title : item.name}</h3>
                <MediaType name={item.media_type} />
                <span className="text-white">{item.release_date}</span>
            </div>
        </div>
    )
}

export default PosterCard;