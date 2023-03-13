function GenreItem({item}:any) {
    return (
        <div className="bg-gray-300/30 text-white py-1 px-1.5 text-sm rounded-md border">
            {item.name}
        </div>
    )
}
 

export default GenreItem;