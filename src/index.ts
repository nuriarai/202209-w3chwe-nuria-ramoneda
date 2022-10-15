import getPokemonList from "./apiServices/getPokemonList.js";
import type {
  PokemonsStructure,
  PokemonStructure,
} from "./apiServices/types.js";

const pokemons: PokemonsStructure = await getPokemonList(10, 5);
console.log(pokemons.results);
