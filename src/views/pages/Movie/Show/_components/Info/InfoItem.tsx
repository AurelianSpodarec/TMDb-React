
function IconPlay() {
    return (
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
        </svg>
    );
}


function InfoItem({title, value, type}:any) {
    return (
        <div className={`relative flex justify-center items-center rounded-3xl h-[150px] ${type === 'play' ? "bg-red-500" : "bg-gray-700/70"} `}>

            {type === "play" ? 
                <div className="w-12 fill-white">
                    <IconPlay /> 
                </div>
                :
                <>
                    {title && <span className="absolute left-0 inline-block -rotate-90 text-white">{title}</span>}
                    {value && <span className="text-4xl text-white font-bold">{value}</span>}
                </>
            }

        </div>
    )
}

export default InfoItem;