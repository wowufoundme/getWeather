import React from 'react';

import './Input.styles.css';

const Input = props => {
    const { city, setCity, getData } = props;

    return (
        <div>
            <input 
                type="text"
                placeholder="Enter a city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? getData(e) : null}
                className="input--control"
            />
        </div>
    )
}

export default Input;