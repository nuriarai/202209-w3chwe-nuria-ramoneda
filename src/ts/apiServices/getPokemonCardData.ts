import type { PokemonApiStructure } from "./types";

const getPokemonCardData = async (pokemonUrl: string) => {
  const response = await fetch(pokemonUrl);

  const pokemonCard = (await response.json()) as PokemonApiStructure;

  return pokemonCard;
};

export default getPokemonCardData;
