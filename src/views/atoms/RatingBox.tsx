function RatingBox({ rating }: any) {
    let ratingClass = "";
    
    switch(true) {
    case (rating >= 1 && rating <= 4):
        ratingClass = "red-500";
        break;
    case (rating >= 5 && rating <= 7):
        ratingClass = "yellow-500";
        break;
    case (rating >= 7 && rating <= 10):
        ratingClass = "green-500";
        break;
    default:
        ratingClass = "";
    }

    if(rating === 0) return <></>
    return (
        <div className={`h-8 w-8 absolute top-3 right-3 rounded-full border-2 border-${ratingClass} bg-gray-900/70`}>
        <div className="flex justify-center items-center w-full h-full">
            <span className="block text-white text-xs">{rating.toFixed(1)}</span>
        </div>
        </div>
    );
}

export default RatingBox;