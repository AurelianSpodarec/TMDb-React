import RecommendedItem from "./RecommendedItem";

function RecommendedList({data, onClick, activeMovie}:any) {
    return (
        <div className="grid grid-cols-4 gap-4 p-8">
         {data && data.map((item: any) => (
            <RecommendedItem item={item} onClick={onClick} isActive={activeMovie.id === item.id}/>
        ))}
        </div>
    )
}

export default RecommendedList;