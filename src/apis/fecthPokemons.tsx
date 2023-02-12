import { PokemonAn, PokemonDe } from "../interfaces/pokemons.interface";
import { formatPokemonName } from "../utils/utils";
//https://unpkg.com/pokemons@1.1.0/pokemons.json

export async function fecthPokemons(): Promise<PokemonAn[]> {
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    if(!response.ok){
        throw new Error("Failed to fetch pokemons API");
    }

    const results = await response.json();

    const Pokemons = results.results.map((pokemon: PokemonDe) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name.toLowerCase())}.gif`
    }));

    const uniquePokemons = Pokemons.filter(
        (pokemon: any, index: number) => Pokemons.findIndex((other: any) => other.id === pokemon.id) === index
    );

    return uniquePokemons;
}