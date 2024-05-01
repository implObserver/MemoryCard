import { randomIntFromInterval } from "../../../shared/lib/helpers";
import { PAGE__COUNT, SIZE } from "../consts/consts";

export const getRandomCards = async () => {
    try {
        const apiKey = 'edfb748b-1384-4d59-8652-4144cefebbfd';
        const parameters = queryParameters();
        const apiUrl = `https://api.pokemontcg.io/v2/cards/${parameters}`;
        const response = await fetch(apiUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'x-api-key': apiKey
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
    }
};

const queryParameters = () => {
    const numberOfPage = randomIntFromInterval(1, PAGE__COUNT);
    const pageSize = `pageSize=${SIZE}`;
    const page = `page=${numberOfPage}`;
    
    return `?${page}&${pageSize}`;
}