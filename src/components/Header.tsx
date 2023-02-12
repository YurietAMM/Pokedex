import React from 'react';
import LogoPokemon from '../assets/Pokémon_logo.png'

type HeaderProps = {
  query: string,
  setQuery: (query: string) => void;
};

const Header = ({ query, setQuery }: HeaderProps) => {

  return (
    <nav id='navHeader' className="navbar navbar-dark bg-primary">
      <div id='containerHeader' className="container-fluid">
        <img 
        id='poke-logo-header' 
        className="navbar-brand" 
        src={LogoPokemon}  
        alt="pokemon logo" 
        />
        <input 
        id='inputBuscarPoke'
        className="form-control" 
        type="text" 
        placeholder="Buscar..." 
        value={query}
        onChange={event => setQuery(event.target.value)}
        />
      </div>
    </nav>
  );
};

export default Header;
