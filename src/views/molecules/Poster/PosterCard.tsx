import { Link } from "react-router-dom";

import RatingBox from "atoms/RatingBox";
import MediaType from "atoms/MediaType";

function PosterCard({ item, url ="" }:{item: any, url: string }) {
    const { id, poster_path, vote_average, media_type, title, name, release_date, adult } = item;

    return (
        <div className="overflow-hidden group cursor-pointer">
        <Link to={`${url}`}>

            <div className="h-[270px] relative">
                <img 
                    className="
                        absolute top-0 right-0 bottom-0 left-0 h-full w-full 
                        rounded-2xl object-cover
                        border border-gray-300/10
                        group-hover:border-yellow-500
                        transition duration-150 ease-in-out
                        " 
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
                />
                <RatingBox rating={vote_average} />
            </div>
            
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-white">{title ? title : name}</h3>
                    <span className="text-white">{release_date}</span>
                </div>
                <MediaType name={media_type} />
            </div>

        </Link>
        </div>
    )
}

export default PosterCard;