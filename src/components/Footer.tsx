import React from "react";
import { Link } from "react-router-dom";
import PokemonPic from '../assets/pikachu.png';
import PokemonItems from '../assets/pokeball.png';
import PokemonPointer from '../assets/pointer.png'

const Footer = () => {
  return (
    <footer id="footer-footer" className="container-fluid d-block">
      <div className="row">
        <div className="col-4">
          <Link to="/pokemons" className="links-footer">
            <img src={PokemonPic} alt="Pikachu" />
            <br />
            Pokémones
          </Link>
        </div>
        <div className="col-4">
          <Link to="/Items" className="links-footer">
            <img src={PokemonItems} alt="Pokeball" />
            <br />
            Objetos
          </Link>
        </div>
        <div className="col-4">
          <Link onClick={(event) => event.preventDefault()} to="/pokemons" className="links-footer">
            <img src={PokemonPointer} alt="Pointer" />
            <br />
            Mapa
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
