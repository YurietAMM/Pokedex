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

  const filtterPokemons = pokemons?.slice(0, 649).filter((pokemon) => 
  {return pokemon.name.toLowerCase().match(query.toLowerCase())}
  );

  return (
    <div id='divAllScreenPokemons'>
      <Header query={query} setQuery={setQuery} />
      <br />
      <br />
      <br />
      <br />
      <main>
      {filtterPokemons.slice(0, 649).map((pokemon) => (
        <div key={pokemon.id} className="card animate__animated animate__fadeInLeft">
          <center><img src={pokemon.imgSrc} className="card-img-top" alt={pokemon.name} /></center>
          <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
            <p className="card-text">{pokemon.id}</p>
            <Link to={`/pokemon/${pokemon.name.toLowerCase()}`}>Más Información</Link>
          </div>
        </div>
))}
      </main>
      <Footer />
    </div>
  );
};

export default Pokemons;
