import { Link } from "react-router-dom";

function TitleHeader({ title, viewAllLink}:any) {
    return (
        <header>
        <div className="flex justify-between items-center">
            <h2 className="font-bold text-3xl text-white">{title}</h2>
            <Link className="text-white" to={`/${viewAllLink}}`}>View All</Link>
        </div>
        </header>
    )
}

export default TitleHeader;