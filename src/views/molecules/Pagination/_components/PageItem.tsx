import { Link } from "react-router-dom";

function PageItem({currentPage, onLink, pathName, href, label, children}:any) {

    return (
        <Link onClick={(e) => onLink} to={`?page=${label}`} className={` flex align-center justify-center items-center rounded cursor-default w-14 h-14  ${currentPage === children ? "border-2 border-yellow-500/20" : ""}`}>
            {children ? children : label}
        </Link>
    )
}

export default PageItem;