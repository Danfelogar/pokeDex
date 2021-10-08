import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';


import './NavBar.css';
import FavoriteContext from '../../contexts/favoriteContext';


export const NavBar = ({onSearch}) => {

    const { favoritePokemons } = useContext(FavoriteContext);

    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
        onSearch(null);
    }
    };

    const handlePokemon = async(e) => {
        const searchLowerCase =search.toLocaleLowerCase();
        onSearch(searchLowerCase);
    }

    return (
        <nav className="navBar">
            <div/>
            <div className="navBar-wrap-logo">
                <img src="https://datadex.talzz.com/_images/graphics/logo.png" alt="logo" className="navBar-img" />
            </div>
            <div className="navBar-wrap-input">
            <input
            className="navBar-input"
            type="text"
            placeholder="Find your pokemon..."
            onChange={ onChange }
            autoComplete="off"
            />
            <button className="navBar-btn-search"
            onClick={ handlePokemon }
            ><FontAwesomeIcon icon={ faSearch } /></button>
            </div>
            <div className="navBar-icon" >
            <FontAwesomeIcon className="navBar-icon-heart" icon={ faHeart } />{favoritePokemons.length}
            </div>
        </nav>
    );
}
