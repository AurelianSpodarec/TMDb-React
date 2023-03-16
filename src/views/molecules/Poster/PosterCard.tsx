import { Link } from "react-router-dom";

import RatingBox from "atoms/RatingBox";
import MediaType from "atoms/MediaType";

function Image({ url }:any) {
    console.log("image", url)
    if(url === null || url === "") return (
        <div className="text-white bg-gray-300/10 text-5xl h-full w-full fill-white rounded-2xl border border-gray-300/10  group-hover:border-yellow-500
        transition duration-150 ease-in-out">
        <div className="flex items-center justify-center h-full w-full ">
            <svg className="w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M448 80c8.8 0 16 7.2 16 16v319.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3l-83 107.4-30.5-42.7c-4.5-6.3-11.7-10-19.5-10s-15 3.7-19.5 10.1l-80 112-4.5 6.2V96c0-8.8 7.2-16 16-16h384zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 100-96 48 48 0 100 96z"></path>
            </svg>
        </div>
        </div>
    ) 
    return (
        
        <img 
            className="
                absolute top-0 right-0 bottom-0 left-0 h-full w-full 
                rounded-2xl object-cover
                border border-gray-300/10
                group-hover:border-yellow-500
                transition duration-150 ease-in-out
                " 
            src={`https://image.tmdb.org/t/p/w500/${url}`} 
        />
    )
}

function PosterCard({ item, url ="" }:{item: any, url: string }) {
    const { id, poster_path, backdrop_path, vote_average, media_type, title, name, release_date, adult } = item;
    const image = poster_path ? poster_path : backdrop_path

    return (
        <div className="overflow-hidden group cursor-pointer">
        <Link to={`${url}`}>

            <div className="h-[270px] relative">
                <Image url={image} />
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