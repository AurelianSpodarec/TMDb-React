import Skeleton from "atoms/Skeleton";

function SkeletonPoster() {
    return (
        <div>
            <Skeleton variant="rect" className="mb-2" height="270px" width="100%" />
            <Skeleton variant="text" className="mb-2" height="15px" width="90%" />
            <Skeleton variant="text" className="mb-2" height="15px" width="70%" />
        </div>
    )
}

export default SkeletonPoster;