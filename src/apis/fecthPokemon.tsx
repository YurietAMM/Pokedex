//https://pokeapi.co/api/v2/pokemon/pikachu

import { PokemonDe } from "../interfaces/pokemons.interface";
import { formatPokemonName } from "../utils/utils";

export async function fecthPokemon(name: string): Promise<PokemonDe> {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}`);

    if(!respuesta.ok){
        throw new Error(`Error fecthing ${name}`);
    }

    const resultado = await respuesta.json();

    return resultado;
}