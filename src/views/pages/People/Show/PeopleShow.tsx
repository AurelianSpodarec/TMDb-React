import { getPersonDetails } from "@/services/themoviedb/api/People";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function PeopleShow() {
    const { id } = useParams(); 

    console.log(id)
    const [person, setPerson] = useState<any>({});

    async function fetchPerson() {
        const res = await getPersonDetails({ id: Number(id) });
        setPerson(res)
        console.log("person", person)
    }

    useEffect(() => {
        if(id) fetchPerson()
    }, [id])

    return (
        <div className="relative bg-[#05161e] pt-40">
            People Show
            <h1 className="text-white text-5xl">Name: {person.name}</h1>
        </div>
    )
}

export default PeopleShow;