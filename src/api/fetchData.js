import axios from 'axios';

const fetchData = async (city) => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=process.env.API_KEY`);

    return response.data;
}

export default fetchData;