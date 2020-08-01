import React from 'react';

import logo from '../assets/logo.png';

import './Header.styles.css';

const Header = props => {

    const { title } = props;

    return (
        <div className='header--container'>
            <div className='main--title'>
                <img className='header--logo' src={logo} alt='get weather logo' />
                <span className='header--title'>{title}</span>
            </div>
            <div className="subtitle--container">
                <span className='subtitle--text'>Get instant live weather in your city</span>
            </div>
        </div>
    )
}

export default Header;