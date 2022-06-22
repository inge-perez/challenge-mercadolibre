import React, { useState } from 'react'
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import icSearch from '../assets/ic_Search.png';
import rutas from '../route-config';

const InputSearch = () => {
    let navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');

    const handleOnchange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate({
            pathname: "/items",
            search: `${createSearchParams({
                search: inputValue
            })}`
        });

    }

    return (
        <div className=''>
            <Form role="search" className='input-form-search' onSubmit={handleSubmit}>
                <input type="search"
                    className="nav-search-input"
                    aria-label="Nunca dejes de buscar"
                    placeholder="Nunca dejes de buscar"
                    value={inputValue}
                    onChange={handleOnchange}
                ></input>
                <button type="submit" className="nav-search-btn"></button>
            </Form>
        </div>
    )
}

const Form = styled.form`
    display: inline-flex;
    width: 100%;
    position: relative;
    input[type="search"] {
        width: 100%;
    }

    button[type="submit"] {
        width: 40px;
        height: 40px;
        position: absolute;
        right: 0;
        border: 1px solid transparent;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(${icSearch});
        cursor: pointer;
        background-color: #eee;
        border-radius: 0px 6px 6px 0px;
    }
`;

export default InputSearch