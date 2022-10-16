export interface PokemonsApiStructure {
  count: number;
  next: string;
  previous: string;
  results: Array<{ name: string; url: string }>;
}

export interface PokemonApiStructure {
  name: string;
  id: number;
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}
