export interface PokemonsStructure {
  count: number;
  next: string;
  previous: string;
  results: [{ name: string; url: string }];
}

export interface PokemonStructure {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }
  ];
  base_experience: number;
  forms: [name: string, url: string];
  height: number;
  id: number;
  name: string;
  order: number;
  sprites: {
    front_default: string;
  };
  weight: number;
}
