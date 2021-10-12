import React, { useContext, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import './PokemonCard.css';
import FavoriteContext from '../../contexts/favoriteContext';

export const PokemonCard = (props) => {

    const { pokemon } = props;
    console.log(pokemon)

    const stats = pokemon.stats.map((stat) =>{
        return stat.base_stat
    })

    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);

    const [isFlipped, setIsFlipped] = useState(false);

    const CardFlip = () => {
        setIsFlipped(!isFlipped);
    }

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

    // const colorsStats = {
    //     "bad":"#fa5858",
    //     "deficient":"#faac58",
    //     "fair":"#f7d358",
    //     "good":"#82fa58",
    //     "very good":"#58faac"
    // }

    const getColorByStat = (stat) => {
        // const colorsStats = {
        //     "bad":"#fa5858",
        //     "deficient":"#faac58",
        //     "fair":"#f7d358",
        //     "good":"#82fa58",
        //     "very good":"#58faac"
        // }
        if(stat <= 29 ) {
            return "#fa5858"
        } else if (stat <= 59) {
            return "#faac58"
        }else if (stat <= 79) {
            return "#f7d358"
        }else if (stat <= 99) {
            return "#82fa58"
        } else if (stat >= 100) {
            return "#58faac"
        }

    };


    return (
        <ReactCardFlip isFlipped={ isFlipped } flipDirection="vertical">
            <div className="pokemonCard">

                <div className="pokemonCard-img">
                    <img src={ pokemon.sprites.other.dream_world.front_default } alt={pokemon.name} />
                </div>
                <div className="pokemonCard-content">
                    <div className="pokemonCard-text-1">
                        <div className="pokemonCard-text-1-details">
                            <p>N.°{pokemon.id}</p>
                            <p style={ {"cursor": "pointer"} } onClick={ CardFlip } > Show Stats </p>
                        </div>
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

            <div className="pokemonCard-back" onClick={ CardFlip } >
                <div className="pokemonCard-back-title">Stats</div>
                <div className="pokemonCard-back-content">
                    <h4 className="container-title-1" >Hp</h4>
                    <div className="percent-content">
                    <div className="percent" style={{
                            backgroundColor: `${getColorByStat(stats[0])}`,
                            "height": "12px",
                            "width" : `${stats[0]}%`,
                            }} ></div>
                    </div>
                    <h5 style={{
                            color: `${getColorByStat(stats[0])}`,
                            }}>{stats[0]}</h5>
                    <h4 className="container-title-2" >Attack</h4>
                    <div className="percent-content">
                    <div className="percent" style={{
                            backgroundColor: `${getColorByStat(stats[1])}`,
                            "height": "12px",
                            "width" : `${stats[1]}%`,
                            }} ></div>
                    </div>
                    <h5 style={{
                            color: `${getColorByStat(stats[1])}`,
                            }}
                        >{stats[1]}</h5>
                    <h4 className="container-title-3" >Defense</h4>
                    <div className="percent-content">
                    <div className="percent" style={{
                            backgroundColor: `${getColorByStat(stats[2])}`,
                            "height": "12px",
                            "width" : `${stats[2]}%`,
                            }} ></div>
                    </div>
                    <h5 style={{
                            color: `${getColorByStat(stats[2])}`,
                            }}>{stats[2]}</h5>
                    <h4 className="container-title-4" >Special-attac</h4>
                    <div className="percent-content">
                    <div className="percent" style={{
                            backgroundColor: `${getColorByStat(stats[3])}`,
                            "height": "12px",
                            "width" : `${stats[3]}%`,
                            }} ></div>
                    </div>
                    <h5 style={{
                            color: `${getColorByStat(stats[3])}`,
                            }}>{stats[3]}</h5>
                    <h4 className="container-title-5" >Special-defense</h4>
                    <div className="percent-content">
                    <div className="percent" style={{
                            backgroundColor: `${getColorByStat(stats[4])}`,
                            "height": "12px",
                            "width" : `${stats[4]}%`,
                            }} ></div>
                    </div>
                    <h5 style={{
                            color: `${getColorByStat(stats[4])}`,
                            }}>{stats[4]}</h5>
                    <h4 className="container-title-6" >Speed</h4>
                    <div className="percent-content">
                    <div className="percent" style={{
                            backgroundColor: `${getColorByStat(stats[5])}`,
                            "height": "12px",
                            "width" : `${stats[5]}%`,
                            }} ></div>
                    </div>
                    <h5 style={{
                            color: `${getColorByStat(stats[5])}`,
                            }}>{stats[5]}</h5>
                </div>
            </div>
        </ReactCardFlip>
    )
}