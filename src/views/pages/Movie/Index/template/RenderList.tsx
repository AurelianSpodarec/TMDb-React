import { Link } from "react-router-dom";

function RenderList({data}:any) {
    return (
        <ul>
        {data && data.map((item:any) => {
            return (
                <li key={item.id}>
                <Link to={`/movies/${item.id}`}>
                    <h2>{item.title}</h2>
                </Link>
                </li>
            )
        })}
        </ul>
    )
}

export default RenderList;