import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import Pokemon from './pages/Pokemon';
import Pokemons from './pages/Pokemons';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
