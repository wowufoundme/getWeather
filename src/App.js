import React, { useState } from 'react';
import Input from './Input/Input.component';
import fetchData from './api/fetchData';

import './App.css';

const App = () => {

    const [ city, setCity ] = useState('');

    const getData = async () => {
        const data = await fetchData(city);
        console.log(data);
    }

    return (
        <div className='App background--slideshow'>
            <Input
                city={city}
                setCity={setCity}
                getData={getData}
            />
        </div>
    );
}

export default App;