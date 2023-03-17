function Skeleton({ className, variant = "rect", width = 100, height = 16, radius, fontSize = 16 }:any) {

    const skeletonStyles = {
        width: `${width}`,
        height: `${height}`,
        borderRadius: radius,
        fontSize: `${fontSize}px`,
    };

    return (
        <div className={`${className} animate-pulse relative`} style={skeletonStyles}>
            {variant === "text" && (
                <div className={`${className} bg-white rounded-xl`} style={{ width: `${width}`, height: `${height}` }}></div>
            )}

            {variant === "circle" && (
                <div className={`${className} bg-white rounded-full`} style={{ width: `${width}`, height: `${height}` }}></div>
            )}

            {variant === "rect" && (
                <div className={` bg-white rounded-xl`}  style={{ width: `${width}`, height: `${height}` }}></div>
            )} 
        </div>
    );
}


export default Skeleton;