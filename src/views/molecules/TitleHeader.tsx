import { Link } from "react-router-dom";

function TitleHeader({ title, viewAllLink}:any) {
    return (
        <header>
            <h2 className="font-bold text-3xl text-white">{title}</h2>
            <Link to={`/${viewAllLink}}`}>View All</Link>
        </header>
    )
}

export default TitleHeader;