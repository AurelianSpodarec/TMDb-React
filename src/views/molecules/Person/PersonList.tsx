import PersonCard from "./PersonCard";

function PersonList({ data }:any) {
    console.log(data)
    return (
        <div className="grid grid-cols-5 gap-8">
            {data && data.map((item:any) => <PersonCard key={item.id} item={item} />)}
        </div>
    )
}

export default PersonList;