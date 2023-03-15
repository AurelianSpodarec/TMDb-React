import { getResponseContent, RequestError } from 'services/requests';
import config from './config_themoviedb';

const FetchTheMovieDB = async function (endpoint:string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?:any) {
   
    const response = await fetch(`${config.API_URL}/${config.API_VERSION}/${endpoint}api_key=${config.API_KEY}`, {
        method,
        "credentials": 'omit',
        "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })

    const content = await getResponseContent(response)

    if (response.ok) return content;
    throw new RequestError(response.statusText, response.status, content)
}

export default FetchTheMovieDB;