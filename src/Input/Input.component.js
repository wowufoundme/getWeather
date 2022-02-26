import React from 'react';

import './Input.styles.css';

const Input = props => {
    const { city, setCity, getData, data } = props;

    const cityParam = (e) => {
        setCity(e.city);
        getData(city);
    }

    return (
        <div className='input--container'>
            <input 
                type="text"
                placeholder="Start typing a city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? getData(e.target.value) : null}
                className="input--control"
                list='cityList'
                autoFocus
            />
            <datalist className='city--datalist' id='cityList'>
                {
                    data.map((elem, index) => 
                        <option 
                            className='search--parameter' 
                            key={index} 
                            datastore={elem.city} 
                            onClick={() => 
                                cityParam(elem)} 
                        >
                                {elem.city}, {elem.country}
                        </option>)
                }
            </datalist>
        </div>
    )
}

export default Input;