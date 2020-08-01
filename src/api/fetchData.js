import axios from 'axios';

const API_KEY = "3f63b541464c9d678aa6041f9abf4488";

const fetchData = async (city) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);

    return response.data;
}

export default fetchData;