import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function PeopleShow() {
    const { id } = useParams(); 
    const [people, setPeople] = useState<any>({});

    // async function fetchMovie() {
    //     const res = await getMovieDetails({ id: Number(id) });
    //     setMovie(res)
    //     console.log("movie", movie)
    // }

    // useEffect(() => {
    //     fetchMovie()
    // }, [])

    return (
        <div className="relative bg-[#05161e]">
            People Show
        </div>
    )
}

export default PeopleShow;