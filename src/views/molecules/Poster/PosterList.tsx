import PosterCard from "./PosterCard";

// TODO: Refactor and create: isFetching, isSuccess and isError
function PosterList({ data, postType, isLoading }:any) {
    console.log(data)

    if(isLoading) {
        return (
            <div className="grid grid-cols-7 gap-8">
                {[...Array(21)].map((_, index) => {
                    return <PosterCard key={index} isLoading={isLoading}/>
                })}
            </div>
        )
    }
    return (
        <div className="grid grid-cols-7 gap-8">
            {data && data.map((item:any) => <PosterCard key={item.id} item={item} postType={postType} isLoading={isLoading}/> )}
        </div>
    )
}

export default PosterList;