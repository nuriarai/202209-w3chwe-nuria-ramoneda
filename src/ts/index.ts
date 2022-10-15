import getPokemonList from "./apiServices/getPokemonList.js";
import type {
  PokemonsStructure,
  PokemonStructure,
} from "./apiServices/types.js";
import App from "./components/App/App.js";
import Header from "./components/Header/Header.js";
import PokemonCard from "./components/PokemonCard/PokemonCard.js";

const pokemons: PokemonsStructure = await getPokemonList(10, 5);

const parentElement: HTMLElement = document.querySelector(".root");
const app = new App(parentElement);
app.render();

const headerParent: HTMLElement = document.querySelector(".app");
const header = new Header(headerParent, "Pokemon's List");
header.render();

const pokemon: PokemonStructure = {
  abilities: [],
  baseExperience: 7,
  height: 9,
  id: 2,
  name: "Pikachu",
  order: 2,
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
  weight: 6,
};
const pokemonCardParent: HTMLElement = document.querySelector(".app");
const pokemonCard = new PokemonCard(pokemonCardParent, pokemon);
pokemonCard.render();
