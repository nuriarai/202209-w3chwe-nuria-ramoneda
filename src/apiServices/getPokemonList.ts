import type { PokemonsStructure } from "./types.js";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const getPokemonList = async (limit: number, offset: number) => {
  const response = await fetch(`${baseUrl}?limit=${limit}&offset=${offset}`);
  const pokemonList = (await response.json()) as PokemonsStructure;
  return pokemonList;
};

export default getPokemonList;
