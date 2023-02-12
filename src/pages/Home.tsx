import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export { default as Item } from './Items';
export { default as Pokemon } from './Pokemon';
export { default as Pokemons } from './Pokemons'; 

const Home = (): JSX.Element => {
  return (<div>
    <Header query={''} setQuery={function (query: string): void {
      throw new Error('Function not implemented.');
    } }></Header>
    <h1>Home</h1>
    <Footer />
  </div>);
};

export default Home;