import { Link, useSearchParams } from "react-router-dom";

function PageItem({onClick, currentPage, onLink, pathName, href, label, children}:any) {
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <button onClick={onClick} className={` flex align-center justify-center items-center rounded cursor-default w-14 h-14  ${currentPage === children ? "border-2 border-yellow-500/20" : ""}`}>
            {children ? children : label}
        </button>
    )
}

export default PageItem;