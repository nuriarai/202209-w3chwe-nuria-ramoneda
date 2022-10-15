export interface PokemonsStructure {
  count: number;
  next: string;
  previous: string;
  results: Array<{ name: string; url: string }>;
}

export interface PokemonApiStructure {
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
  }>;
  base_experience: number;
  height: number;
  id: number;
  name: string;
  order: number;
  sprites: {
    front_default: string;
  };
  weight: number;
}

export interface PokemonFullStructure extends PokemonApiStructure {
  baseExperience: number;
  image: string;
}

export type PokemonStructure = Omit<
  PokemonFullStructure,
  "base_experience" | "sprites"
>;
