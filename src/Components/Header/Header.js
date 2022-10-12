import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        backgroundColor: 'black',

        color: 'white'
    };
    return (
        <div className='header-container container'>
            <div className='title'>
                <h2>Quiz Station</h2>
            </div>

            <div className='menu-container '>
                <ul className='nav'>
                    <li className='nav-item '>
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className='list' to='/'>Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className='list' to='/blog'>Blog</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className='list' to='/statistics'>Statistics</NavLink>
                    </li>
                </ul>
            </div>

        </div >

    );
};

export default Header;