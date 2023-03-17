function Skeleton({ variant = "rect", width = 100, height = 16, rounded = "none", fontSize = 16 }) {

    const skeletonStyles = {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${rounded === "circle" ? "50%" : rounded === "rounded" ? "8px" : "0"}`,
        fontSize: `${fontSize}px`,
    };

    return (
        <div className="animate-pulse bg-gray-200" style={skeletonStyles}>
        {variant === "text" && (
            <div className="h-4 bg-white rounded-md mt-2 mb-1" style={{ width: "50%" }}></div>
        )}
        
        {variant === "circle" && (
            <div className="bg-white rounded-full" style={{ width: `${height}px`, height: `${height}px` }}></div>
        )}

        {variant === "rect" && (
            <div className="bg-white rounded-md" style={{ width: "100%", height: "100%" }}></div>
        )}
        </div>
    );
}


export default Skeleton;