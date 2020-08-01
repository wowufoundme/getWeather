import React from 'react';

import './SearchResults.styles.css';

const SearchResults = props => {
    
    const { data, setCity, getData } = props;

    const cityParam = (e) => {
        setCity(e.city);
        getData(e.city);
    }
    
    return (
        <div className='search--container'>
            {
                data.map((elem, index) => 
                    <div 
                        className='search--parameter' 
                        key={index} 
                        datastore={elem.city} 
                        onClick={() => 
                            cityParam(elem)} 
                    >
                            {elem.city}, {elem.country}
                    </div>)
            }
        </div>
    )
}

export default SearchResults;