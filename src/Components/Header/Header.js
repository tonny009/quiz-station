import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container container'>
            <div className='title'>
                <h2>Quiz Station</h2>
            </div>

            <div className='menu-container'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link className='list' to='/'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='list' to='/blog'>Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='list' to='/statistics'>Statistics</Link>
                    </li>
                </ul>
            </div>

        </div >

    );
};

export default Header;