import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Items = (): JSX.Element => {
  return (
    <div>
    <Header query={''} setQuery={function (query: string): void {
      throw new Error('Function not implemented.');
    } }></Header>
    <h1>Items</h1>
    <Footer />
  </div>
  
  );
};

export default Items;