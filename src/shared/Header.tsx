import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo_ML2.png'
import InputSearch from './InputSearch'


const Header = () => {

    let navigate = useNavigate();

    const handleSubmit = () => {
        // navigate({
        //     pathname: "/",

        // });

        navigate("/", { replace: false });

    }

    return (
        <header role="banner" className='nav-header'>
            <div className='nav-header-container'>
                <img src={logo} alt="Logo" style={{ cursor: "pointer" }} onClick={handleSubmit} />
                <InputSearch query='' />
            </div>
        </header>
    )
}

export default Header