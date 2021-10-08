import React from 'react';
import { Pagination } from './Pagination';

import './Pokedex.css';
import { PokemonCard } from './PokemonCard';

export const Pokedex = (props) => {

    const { pokemons, page, setPage, total,loading } = props;

    const lastPage = ( ) => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    }

    const nextPage = ( ) => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    }

    return (
        <div className="pokedex">
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <Pagination
                page={page + 1 }
                totalPages={ total }
                onLeftClick={ lastPage }
                onRightClick={ nextPage }
                />
            </div>
            { loading //colocando el loading aqui se ahce mas rapida la caga
                ?(<div>Loading Pokemons...</div>)
                :(
                <div className="pokedex-grid">
                    {pokemons.map((pokemon, index) => {
                        return(
                            <PokemonCard pokemon={pokemon} key={index} />
                        )
                    })}
                </div>
                )
            }
        </div>
    )
}
