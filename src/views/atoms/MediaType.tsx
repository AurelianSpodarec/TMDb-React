import { capitalizeFirstLetter } from "@/utils/common";

interface mediaTypes {
    movie: string;
    tv: string;
}

function MediaType({ name = "movie" }:{ name?: keyof mediaTypes }) {

    const mediaTypes: mediaTypes = {
        movie: "border-yellow-400",
        tv: "border-red-400",
    }

    return (
        <div className={`border text-center inline-block py-1 px-2 rounded-lg ${mediaTypes[name]}`}>
            <span className="text-white">{capitalizeFirstLetter(name)}</span>
        </div>
    )
}

export default MediaType;