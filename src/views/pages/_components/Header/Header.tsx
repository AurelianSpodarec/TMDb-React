import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            Header

            <ul>
                <li>
                    <Link to="">Discover</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="">Trending</Link>
                </li>
                <li>
                    <Link to="">People</Link>
                </li>
                <li>
                    <Link to="">Search</Link>
                </li>
                <li>
                    <Link to="">Discover</Link>
                </li>
                <li>
                    <Link to="">TV</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;