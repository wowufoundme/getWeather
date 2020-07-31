import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { WiWindy, WiEarthquake } from 'react-icons/wi';

import './WeatherCard.styles.css';

const WeatherCard = props => {

    const { data } = props;

    return (
        <div className='card--container'>
            {console.log(props.data)}
            <div className='city--info--container'>
                <span className='city--name'>{data.name}</span>
                <span className='city--country'>{data.sys.country}</span>
            </div>
            <div className='geo--location'>
                <div className='lat--container box'>
                    <span className='geo--value'>{data.coord.lat}</span>
                    <span className='geo--title'>Latitude</span>
                </div>
                <div className='long--container box'>
                    <span className='geo--value'>{data.coord.lon}</span>
                    <span className='geo--title'>Longitude</span>
                </div>
            </div>
            <div className='temperature--stats'>
                <span className='temperature--reading mr--10'>{Math.round(data.main.temp)}<sup>&deg; C</sup></span>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='condition' className='condition--icon'/>
            </div>
            <div className='miscellaneous--stats'>
                <div className='three-folds--grid'>
                    <div className='weather--condition'>{data.weather[0].main}</div>
                    <div className='max--temperature align--vertically--center text--center'><FiArrowUp className='fc--icon'/>{data.main.temp_max}<sup>&deg; C</sup></div>
                    <div className='min--temperature align--vertically--center text--center'><FiArrowDown className='fc--icon'/>{data.main.temp_min}<sup>&deg; C</sup></div>
                </div>
                <div className='misc--title--container three-folds--grid'>
                    <span>Condition</span>
                    <span>Max Temp</span>
                    <span>Min Temp</span>
                </div>
            </div>
            <div className='miscellaneous--stats'>
                <div className='three-folds--grid'>
                    <div className='weather--condition'>{data.main.humidity}&#37;</div>
                    <div className='max--temperature align--vertically--center text--center'><WiWindy className='fc--icon'/>{data.wind.speed}KM/hr</div>
                    <div className='min--temperature align--vertically--center text--center'><WiEarthquake className='fc--icon'/>{data.main.pressure}hPA</div>
                </div>
                <div className='misc--title--container three-folds--grid'>
                    <span>Humidity</span>
                    <span>Wind Speed</span>
                    <span>Pressure</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;