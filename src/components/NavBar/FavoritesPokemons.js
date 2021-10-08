import React from 'react';
import { PokemonCard } from '../Pokemons/PokemonCard';

import './FavoritesPokemons.css';

export const FavoritesPokemons = ({ favorites }) => {
    console.log(favorites);

    return (
        <div className="favorites">
            <div className="favorites-grid">
                {
                    favorites.map((favorite,index) => {
                        return(
                            <PokemonCard pokemon={favorite} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
