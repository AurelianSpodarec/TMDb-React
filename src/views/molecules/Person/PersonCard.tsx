import { configApp } from "@/config/app";
import { Link } from "react-router-dom";

function PersonCard({ item }:any) {
    console.log()
    if(!item) return <></>
    return (
        <div className="text-black">
        <Link to={`/people/${item.id}`}>
            <img src={`${configApp.imageTMBD.url}${configApp.imageTMBD.size["2xl"]}${item.profile_path}`} className="rounded-2xl" />
            
            <div className="flex justify-between items-center w-full">
                <div>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-gray-400">{item.known_for_department}</span>
                </div>
                <div>
                    <span className="text-yellow-400">{item.popularity}</span>
                </div>
            </div>

        </Link> 
        </div>
    )
}

export default PersonCard;