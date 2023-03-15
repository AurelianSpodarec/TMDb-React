import { appConfig } from "@/config/app";
import { Link } from "react-router-dom";

function PersonCard({ item }:any) {
    console.log()
    if(!item) return <></>
    return (
        <div className="text-black">
        <Link to={`/people/${item.id}`}>
            <img src={`${appConfig.urlImageTMDB}${appConfig.urlImageSizeTMBD["2xl"]}${item.profile_path}`} />
            {item.name}
            {item.known_for_departament}
            {item.popularity}
        </Link> 
        </div>
    )
}

export default PersonCard;