import RecommendedItem from "./RecommendedItem";

function RecommendedList({data, onClick, activeMovie}:any) {
    return (
        <div className="grid grid-cols-4 gap-12 p-8">
         {data && data.map((item: any) => (
            <RecommendedItem key={item.id} item={item} onClick={onClick} isActive={activeMovie.id === item.id}/>
        ))}
        </div>
    )
}

export default RecommendedList;