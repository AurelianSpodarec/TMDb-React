import { capitalizeFirstLetter } from "@/utils/common";


function MediaType({ name }: { name?: MediaTypes }) {

    const mediaTypes: Record<MediaTypes, string> = {
        movie: "border-yellow-400",
        tv: "border-red-400"
    };

    if(!name) return <></>
    return (
        <div className={`border text-center inline-block py-1 px-2 rounded-lg ${mediaTypes[name]}`}>
            <span className="text-white">{capitalizeFirstLetter(name)}</span>
        </div>
    );
}

export default MediaType;

type MediaTypes = "movie" | "tv";