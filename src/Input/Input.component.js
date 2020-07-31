import React from 'react';

const Input = props => {
    const { city, setCity, getData } = props;

    return (
        <div>
            <input 
                type="text"
                placeholder="Enter a city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? getData(e) : null}
            />
        </div>
    )
}

export default Input;