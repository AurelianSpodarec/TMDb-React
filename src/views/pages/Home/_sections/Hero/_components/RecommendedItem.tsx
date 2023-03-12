import { IMovie } from "@/types/IMovie";

type RecommendedItemProps = {
    item: IMovie;
    onClick: (id?: number) => void;
    isActive: boolean;
};

function RecommendedItem({ item, onClick, isActive }: RecommendedItemProps) {
    if(!item) return <></>
    return (
        <div
            key={item.id}
            onClick={() => onClick(item.id)}
            className={`border transition ease-in-out duration-75 hover:scale-105 rounded-lg cursor-pointer ${
            isActive ? "border-gray-100 scale-105 z-10" : "border-transparent"
            }`}
        >
            <h3 className="sr-only">{item.title}</h3>
            <img
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            alt=""
            />
        </div>
    );
}

export default RecommendedItem;