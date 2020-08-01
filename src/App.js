import React, { useState, useEffect } from 'react';

import Input from './Input/Input.component';
import WeatherCard from './WeatherCard/WeatherCard.component';
import SearchResults from './SearchResults/SearchResults.component';
import fetchData from './api/fetchData';
import searchData from './api/searchData';
import Header from './Header/Header.component';

import './App.css';

const App = () => {

    const [ city, setCity ] = useState('');
    const [ cityData, setCityData ] = useState({});
    const [ displayData, setDisplayData ] = useState(false);
    const [ theme, setTheme ] = useState('');
    let [ searchResults, setSearchResults ] = useState([]);
    
    const getData = async (city='delhi') => {
        const data = await fetchData(city);
        setCityData(data);
        setDisplayData(true);
        setSearchResults([]);
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

    useEffect(() => {
        if(  city.length > 2 ) {
            let newData = searchData(city);
            setSearchResults(newData);
        } else {
            setSearchResults([]); 
        }
    }, [city])

    const clearData = () => {
        setCity('');
        setDisplayData(false);
    }
 
    return (
        <div className='App background--slideshow'>
            <Header title='Get Weather' />
            <Input
                city={city}
                setCity={setCity}
                getData={getData}
            />
            { displayData && <WeatherCard data={cityData} /> }
            {
                city === '' ?
                null :
                <SearchResults setCity={setCity} getData={getData} data={searchResults} />
            }
            <button className='themer posLeft' onClick={changeTheme}>
            {
                theme === '' ?
                "Dark Theme" :
                "Light Theme"
            }
            </button>
            <button className='themer posRight btn--invert' onClick={() => clearData()}>Clear</button>
        </div>
    );
}

export default App;