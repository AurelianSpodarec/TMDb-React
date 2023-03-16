import PosterCard from "./PosterCard";

function PosterList({ data }:any) {
    console.log(data)
    return (
        <div className="grid grid-cols-7 gap-8">
            {data && data.map((item:any) => <PosterCard key={item.id} item={item} />)}
        </div>
    )
}

export default PosterList;