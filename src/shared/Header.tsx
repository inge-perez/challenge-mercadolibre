import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo_ML2.png'
import InputSearch from './InputSearch'


const Header = () => {
    return (
        <header role="banner" className='nav-header'>
            <div className='nav-header-container'>
                <Link to="/">
                    <img src={logo} alt="Logo" style={{ width: "100%", height: "100%" }} />
                </Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Header