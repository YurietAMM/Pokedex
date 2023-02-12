import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { fecthPokemons } from '../apis/fecthPokemons';
import { PokemonAn } from '../interfaces/pokemons.interface';
import LoadingScreen from '../components/LoadingScreen';
// import { PokemonDe } from '../interfaces/pokemons.interface';

const Pokemons = (): JSX.Element => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [pokemons, setPokemos] = useState<PokemonAn[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      const allPokemons = await fecthPokemons();
      setPokemos(allPokemons);
      setIsLoading(false);
    };
    fetchAllPokemons();
  }, [])

  if (isLoading || !pokemons){
    return <LoadingScreen />;
  }

  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <main>
      {pokemons.slice(0, 649).map((pokemon) => (
        // <Link key={pokemon.id} className='listItem' to={`/pokemon/${pokemon.name.toLowerCase()}`}>
        //   <img className='listItemIcon' src={pokemon.imgSrc} alt="pokemon" />
        //   <div className='listItemText'>
        //     <span>{pokemon.name}</span>
        //     <span>{pokemon.id}</span>
        //   </div>
        // </Link>
        <div key={pokemon.id} className="card">
          <center><img src={pokemon.imgSrc} className="card-img-top listItemIcon" alt={pokemon.name} /></center>
          <div className="card-body listItemText">
            <h5 className="card-title">{pokemon.name}</h5>
            <p className="card-text">{pokemon.id}</p>
            <Link to={`/pokemon/${pokemon.name.toLowerCase()}`}>Ver</Link>
          </div>
        </div>
))}



        
      </main>
      <Footer />
    </div>
  );
};

export default Pokemons;
