import React from 'react';

import './SearchResults.styles.css';

const SearchResults = props => {
    
    const { data, setCity } = props;

    const cityParam = (e) => {
        e.preventDefault();
        console.log('setting city');
    }
    
    return (
        <div className='search--container'>
            {
                data.map((elem) => <div className='search--parameter' onClick={console.log('this clicked')}>{elem.city}, {elem.country}</div>)
            }
        </div>
    )
}

export default SearchResults;