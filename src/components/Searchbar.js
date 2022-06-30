import React from 'react';
import {searchPokemon} from '../api';
const {useState} = React;

const Searchbar = () => {

    const [search, setSearch] = useState ('');
    const [pokemon, setPokemon] = useState ('');

    const onChange = (evento) => {
        console.log(evento.target.value);
        setSearch(evento.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        // console.log(data); vamos a quitar console.log y poner setPokemon para que nos devuelva la data que necesitamos. UN intercambio
        setPokemon(data);
    }

 return (
    <div className="search-bar">
       <div>
         <input type="text" className="form-control" placeholder="Buscar pokemon..." 
         onChange ={onChange} />
       </div>

       <div>
         <button  type="submit" className="btn btn-primary" onClick={onClick}>Buscar</button>   
       </div>

       <div>
          <div>Nombre: {pokemon.name}</div>
          <div>Peso: {pokemon.weigth}</div>
          {/* <img src= {pokemon.sprites.front.default}  alt="imagenes de pokemon"/> */}
       </div>

      </div>
  )
}

export default Searchbar;
