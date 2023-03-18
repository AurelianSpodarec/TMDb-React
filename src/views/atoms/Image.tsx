import { _DEPRICATED_configApp } from "@/config/app";

function Image({ src, url, size = "w500", type = "poster" }:ImageProps) {
    if(!url) return (
        <div className="flex items-center justify-center h-full w-full ">
        <svg className="text-white fill-white w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M448 80c8.8 0 16 7.2 16 16v319.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3l-83 107.4-30.5-42.7c-4.5-6.3-11.7-10-19.5-10s-15 3.7-19.5 10.1l-80 112-4.5 6.2V96c0-8.8 7.2-16 16-16h384zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 100-96 48 48 0 100 96z"></path>
        </svg>
        </div>
    ) 
    return (
        <img 
            className="h-full w-full object-cover" 
            src={url} 
        />
    )
}

export default Image;

type ImageProps = {
    url: string;
    src?: string;
    size?: "w45" |"w92" | "w154" | "w185" | "w300" | "w342" | "w500" | "w600" | "w780" | "w1280" | "original";
    type?: "poster" | "person";
}