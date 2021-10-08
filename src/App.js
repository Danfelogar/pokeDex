import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { getPokemon, getPokemonData, searchPokemon } from './api/api';
import { NavBar } from './components/NavBar/NavBar';
import { Pokedex } from './components/Pokemons/Pokedex';
import { FavoriteProvider } from './contexts/favoriteContext';
import { Footer } from './components/Footer/Footer';
import { FavoritesPokemons } from './components/NavBar/FavoritesPokemons';

const localStoraceKey = "favorite_pokemon"

function App() {

  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, SetFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  //esta funcion de abajo es la mas poderosa y por ende la esencia de este codigo por lo desconocida que era para  mi
  const fetchPokemon = async () =>{
    try {
      setLoading(true);//porque la carga de la pag demora por lo que es necesario decirle  al usuario que espere  para ejecutar su peticion que para este caso es pasar pag
      const data = await getPokemon(21, 21 * page);
      const promises=data.results.map( async(pokemon) =>{
        return await getPokemonData(pokemon.url);//esto esta creando 10 promesas diferentes para cada poquemon es decir esta "desestructurando" la info del url de la data primaria
      });
      const result = await Promise.all(promises);//me ayuda a acceder al url que es donde esta almacenado la informacion detallada de un pokemon dentro de mi data
      // pd:oye no quiero que sigas corriendo mas codigo hasta que (promice.all) termine de devolverme todo lo que necesito
      setPokemons(result);
      setLoading(false);
      setTotal(Math.ceil(data.count / 21));
      setNotFound(false);
    } catch(err){
      alert(err);
    }
  }

  const  loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(localStoraceKey)) || [];
    SetFavorites(pokemons);
  }

  useEffect(() => {
    loadFavoritePokemons();
  }, [])

  useEffect(() => {
    fetchPokemon();
  }, [page])

  const updateFavoritePokemons = (props) =>{
    const updated = [...favorites];
    const isFavorite = favorites.indexOf(props);
    if(isFavorite >= 0){
      updated.splice(isFavorite,1);
    } else {
      updated.push(props);
    }
    SetFavorites(updated);
    window.localStorage.setItem(localStoraceKey,
      JSON.stringify(updated));//para guardar en el store todos mis corazoncitos
      console.log(favorites);
  };

  const onSearch= async(pokemonName) => {
    if(!pokemonName) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemonName);

    if(!result ) {
      setNotFound(true);
      setLoading(false);
      return
    }else{
      setPokemons([result]);
      setPage(0);//para vitar que en la busqueda si es exitosa se  muestre la paginacion de toda la pokedes
      setTotal(1);//el mismo comentario que el de arriba
    }
    setLoading(false);
  }

  // console.log(pokemons)

  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons
    }} >
      <div>
      <Router>
        <NavBar onSearch={ onSearch } />
        <Switch>
          <Route exact path="/">
          {
            notFound
            ?(<div className="notFound" >The searched pokemon was not found 😔</div>)
            :(
              <div className="App">
              <Pokedex pokemons={ pokemons } page={ page } setPage={ setPage } total={ total } loading={ loading } />
              </div>
            )
          }
          </Route>
          <Route exact path="/favoritespks">
            <FavoritesPokemons favorites={ favorites }  />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </div>
    </FavoriteProvider>
  );
}

export default App;

