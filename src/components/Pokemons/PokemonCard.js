import React, { useContext } from 'react';

import './PokemonCard.css';
import FavoriteContext from '../../contexts/favoriteContext';

export const PokemonCard = (props) => {

    const { pokemon } = props;
    // console.log(pokemon)

    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);

    const redHeart = "❤️";
    const blackHeart = "🖤";

    const heart = favoritePokemons.includes(pokemon) ? redHeart : blackHeart;

    const clickHeart = (e) =>{
        e.preventDefault();
        updateFavoritePokemons(pokemon);
    }
    const colors = {
        grass: '#63BB5B',
        fire: '#FF9C54',
        water: '#4E90D5',
        electric: '#F3D23B',
        ice: '#74CEC0',
        poison: '#AB6AC8',
        ground: '#D97746',
        rock: '#C7B78B',
        bug: '#90C12C',
        dragon: '#0A6DC4',
        normal: '#a4acaf',
        flying: '#8FA8DD',
        fighting: '#D80A49',
        psychic: '#F97176',
        ghost: '#5269AC',
        dark: '#5A5366',
        steel: '#5A8EA1',
        fairy: '#EC8FE6',
    };

    const getColorByType= (type) => colors[type];

    return (
        <div className="pokemonCard" >
            <div className="pokemonCard-img">
                <img src={ pokemon.sprites.other.dream_world.front_default } alt="{pokemon.name}" />
            </div>
            <div className="pokemonCard-content">
                <div className="pokemonCard-text-1">
                    <div>N.°{pokemon.id}</div>
                    <h3>{pokemon.name}</h3>
                </div>
                <div className="pokemonCard-text-2">
                    <div className="pokemonCard-type">
                        {
                            pokemon.types.map((type, index)=>{
                            return<div key={index}
                            style={{
                                display: "flex",
                                backgroundColor: `${getColorByType(type.type.name)}`,
                                borderRadius: "25px",
                                marginBottom: "5px",
                                fontSize: "22px",
                                fontWeight: "400",
                                width: "130px",
                                letterSpacing: "1.4px",wordSpacing: "1px",textTransform: "capitalize",
                                justifyContent:"center",
                                }} >{type.type.name}</div>;
                            }
                        )}
                    </div>
                    <div className="pokemonCard-icon"
                    onClick={ clickHeart }
                    >
                    {heart}</div>
                </div>
            </div>
        </div>
    )
}
