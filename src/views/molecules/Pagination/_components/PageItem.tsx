import { Link, useSearchParams } from "react-router-dom";

function PageItem({currentPage, onLink, pathName, href, label, children}:any) {
    let [searchParams, setSearchParams] = useSearchParams();

    function setPage() {
        onLink()
        setSearchParams({
            ...searchParams,
            page: label
        });
    }
    
    return (
        <button onClick={() => setPage} className={` flex align-center justify-center items-center rounded cursor-default w-14 h-14  ${currentPage === children ? "border-2 border-yellow-500/20" : ""}`}>
            {children ? children : label}
        </button>
    )
}

export default PageItem;