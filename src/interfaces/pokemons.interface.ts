// import Pokemon from '../pages/Pokemon';
// export interface Welcome {
//     results: PokemonDe[];
// }

export interface PokemonAn {
    id: string;
    name: string;
    imgSrc: string;
}

export interface PokemonDe {
    national_number: string;
    evolution:       Evolution | null;
    sprites:         Sprites;
    name:            string;
    type:            Type[];
    total:           number;
    hp:              number;
    attack:          number;
    defense:         number;
    sp_atk:          number;
    sp_def:          number;
    speed:           number;
}

export interface Evolution {
    name: string;
}

export interface Sprites {
    normal:   string;
    large:    string;
    animated: string;
}

export enum Type {
    Bug = "Bug",
    Dark = "Dark",
    Dragon = "Dragon",
    Electric = "Electric",
    Fairy = "Fairy",
    Fighting = "Fighting",
    Fire = "Fire",
    Flying = "Flying",
    Ghost = "Ghost",
    Grass = "Grass",
    Ground = "Ground",
    Ice = "Ice",
    Normal = "Normal",
    Poison = "Poison",
    Psychic = "Psychic",
    Rock = "Rock",
    Steel = "Steel",
    Water = "Water",
}