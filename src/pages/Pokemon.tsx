import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { formatPokemonName } from "../utils/utils";
import { PokemonDe } from '../interfaces/pokemons.interface';
import { fecthPokemon } from '../apis/fecthPokemon';

const Pokemon = (): JSX.Element => {

  const { name } = useParams<{ name: string }>();
  const imgSrc = typeof name === 'string' ? `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(name.toLowerCase())}.gif` : '';
  const [pokemon, setPokemon] = useState<PokemonDe>();

  useEffect(() => {
    async function getPokemon() {
      const fetchedPokemon = await fecthPokemon(name as string);
      setPokemon(fetchedPokemon);
    }
    getPokemon();
  }, [name])

  return (<div>
    <Header query={''} setQuery={function (query: string): void {
      throw new Error('Function not implemented.');
    } } />

    <main>
      <h1>{name?.toUpperCase()}</h1>
      <h3>Nr. {pokemon?.national_number}</h3> 
      <img src={imgSrc} alt="imagen"/>
      <div>
        <h3>Tipo: {pokemon?.type}</h3>
        <h5>HP: {pokemon?.hp}</h5>
        <h5>Ataque: {pokemon?.attack}</h5>
        <h5>Defensa: {pokemon?.defense}</h5>
        <h5>Velocidad: {pokemon?.speed}</h5>
      </div>
    </main>

    <Footer />
  </div>);
  };

export default Pokemon;