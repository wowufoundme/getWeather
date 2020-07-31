import React, { useState, useEffect } from 'react';
import Input from './Input/Input.component';
import WeatherCard from './WeatherCard/WeatherCard.component';
import fetchData from './api/fetchData';

import './App.css';

const App = () => {

    const [ city, setCity ] = useState('');
    const [ cityData, setCityData ] = useState({});
    const [ displayData, setDisplayData ] = useState(false);
    const [ theme, setTheme ] = useState('');
    
    const getData = async () => {
        const data = await fetchData(city);
        setCityData(data);
        setDisplayData(true);
        setCity('');
    }

    const changeTheme = e => {
        if (theme === '') {
            setTheme('dark');
        } else {
            setTheme('');
        }
        document.documentElement.setAttribute("data-theme", theme);
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    })
 
    return (
        <div className='App background--slideshow'>
            <Input
                city={city}
                setCity={setCity}
                getData={getData}
            />
            {
                displayData ?
                <WeatherCard data={cityData} /> :
                null
            }
            <button className='themer' onClick={changeTheme}>{
                theme === '' ?
                "Dark Theme" :
                "Light Theme"
            }</button>
        </div>
    );
}

export default App;